import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

//TODO : Link to Client Page at Push ID

const Home = () => {
  const history = useHistory();
  const [productId, setProductID] = useState("");
  const [check, setCheck] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product?productId=" + productId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.email);
        history.push("/client/" + productId);
        setCheck(true);
      })
      //? catch Error Here
      .catch((err) => {
        // alert("Pleaseserv enter correct ID");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Pleaseserv enter correct ID",
        });
      });
  };

  const onChange = (e) => {
    setProductID(e.target.value);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center home">
      <div className="w-50 home-form">
        <form onSubmit={handleSubmit}>
          Hello
          <p>Please enter your ID: </p>
          <div className="subscribe-form">
            <input className="subscribe-form-input" placeholder="Enter your ID" value={productId} onChange={(e) => onChange(e)} />
            <button className="subscribe-form-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
