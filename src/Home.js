import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

//TODO : Link to Client Page at Push ID

const Home = () => {
  const history = useHistory();
  const [productId, setProductID] = useState();
  const [check, setCheck] = useState(false);
  console.log(productId);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product?productId=" +
        productId,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res.email);
        history.push("/client/" + productId);
        setCheck(true);
      })
      //? catch Error Here
      .catch((err) => {
        alert("Pleaseserv enter correct ID");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Hello
        <p>Please enter your ID: </p>
        <input
          type="test"
          value={productId}
          onChange={(e) => setProductID(e.target.value)}
        />
        {/* //?<<<<<<<<<<<<<<<< Change to Customer Page>>>>>>>> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;
