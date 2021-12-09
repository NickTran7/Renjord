import { useState } from "react";
import { useHistory } from "react-router";

const EditButton = ({ productId, item }) => {
  // e.preventDefault();
  const [value, setValue] = useState(null);

  const [isReady, setIsReady] = useState(false);
  console.log("updateValue: " + value);
  console.log("productId: " + productId);
  console.log("updateKey: " + item);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    let client = {
      productId: productId,
      updateKey: item,
      updateValue: value,
    };
    const x = JSON.stringify(client);
    console.log(x);
    const requestData = {
      method: "PATCH",
      body: x,
    };
    setIsReady(true);
    fetch(
      "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product",
      requestData
    )
      .then((res) => res.text())
      .then((ressponse) => {
        console.log(ressponse);
        console.log(x);
        console.log("Succesfully changed");
        alert("Done");
        history.go(0);
        setIsReady(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={item}
          onChange={(e) => setValue(e.target.value)}
        />

        {!isReady && <button>Submit</button>}
        {isReady && <button disabled>Adding client...</button>}
      </form>
    </div>
  );
};
export default EditButton;
