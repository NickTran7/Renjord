//! Input form
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AbortController from "abort-controller";

// import useFetch from "../useFetch";
// import DataList from "./DataList";

const Create = () => {
  const [productId, setProductId] = useState("");
  const [chainType, setChain] = useState("necklace");
  const [metalType, setMetalType] = useState("Fine Silver 99%");
  const [width, setWidth] = useState("");
  const [sizeLength, setSizeLength] = useState("");
  const [weight, setWeight] = useState("");
  const [clasp, setClasp] = useState("");
  const [gemStone, setGemstone] = useState("");
  const [itemDate, setItemDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isPending, setIsPending] = useState(false);
  const [randomID, setRandomID] = useState("");
  const history = useHistory();

  //?Auto generate random ID
  const AutoID = () => {
    useEffect(() => {
      let result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < 15; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      console.log(result);
      setProductId(result);
      setRandomID(result);
    }, []);
  };

  //? Metal type

  // ? set Date here
  const GetDate = () => {
    useEffect(() => {
      var today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      console.log(today);
      setItemDate(today);
    }, []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();

    //? client = data send to Amazon
    let client = {
      productId,
      name,
      email,
      phone,
      chainType,
      itemDate,
      metalType,
      sizeLength,
      width,
      weight,
      clasp,
      gemStone,
    };
    setIsPending(true);

    const raw = JSON.stringify(client);
    console.log(typeof raw);
    console.log(raw);

    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product",
      requestOptions
    )
      .then(() => {
        setIsPending(false);
        controller.abort();
        history.push("/datas/" + productId);
      })
      .then((result) => {
        console.log(result);
      })

      .catch((error) => console.log("error", error));
  };

  return (
    <div className="create">
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        {/* //? Auto Generate ID */}

        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label> Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label> Chain Type:</label>
        <select value={chainType} onChange={(e) => setChain(e.target.value)}>
          <option value="necklace">Necklace</option>
          <option value="bracelet">Bracelet</option>
          <option value="pendant">Pendant</option>
          <option value="ring">Ring</option>
          <option value="other">Other</option>
        </select>

        <label> Metal Type:</label>
        <select
          value={metalType}
          onChange={(e) => setMetalType(e.target.value)}
        >
          <option value="Fine Silver 99%">Fine Silver 99%</option>
          <option value="24k Gold 99%">24k Gold 99%</option>
          <option value="Platium 99%">Platium 99%</option>
          <option value="Other">Other</option>
        </select>

        <label>Size/Length:</label>
        <input
          type="text"
          value={sizeLength}
          onChange={(e) => setSizeLength(e.target.value)}
        />

        <label>Width:</label>
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <label>Weight:</label>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label>Clasp:</label>
        <input
          type="text"
          value={clasp}
          onChange={(e) => setClasp(e.target.value)}
        />
        <label>Gemstone:</label>
        <input
          type="text"
          value={gemStone}
          onChange={(e) => setGemstone(e.target.value)}
        />

        {!isPending && <button>Submit</button>}
        {isPending && <button disabled>Adding client...</button>}

        <label>
          ProductId: {AutoID()} {randomID}
        </label>
        <label>
          Date created: {itemDate}
          {GetDate()}
        </label>
      </form>
    </div>
  );
};

export default Create;
