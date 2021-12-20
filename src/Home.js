import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { useWindowSize } from "./hooks/layout/useWindowSize";

//TODO : Link to Client Page at Push ID

const Home = () => {
  const history = useHistory();
  const [productId, setProductID] = useState("");
  const [check, setCheck] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const width = useWindowSize();

  useLayoutEffect(() => {
    if (width >= 1280) {
      document.querySelector(".home-form").classList.remove("w-100");
      document.querySelector(".home-form").classList.add("w-50");
    } else {
      document.querySelector(".home-form").classList.remove("w-50");
      document.querySelector(".home-form").classList.add("w-100");
    }
  }, [width]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    fetch("https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product?productId=" + productId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.email);
        setIsSubmit(false);
        history.push("/client/" + productId);
        setCheck(true);
      })
      //? catch Error Here
      .catch((err) => {
        // alert("Pleaseserv enter correct ID");
        setIsSubmit(false);
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
      <div className="w-100 home-form">
        <form onSubmit={handleSubmit}>
          <h1>Hello!</h1>
          <p>Please enter your ID: </p>
          <div className="subscribe-form">
            <input className="subscribe-form-input" placeholder="Enter your ID" value={productId} onChange={(e) => onChange(e)} />
            <button className="subscribe-form-button" disabled={isSubmit ? true : false}>
              {isSubmit ? <span className="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span> : ""}
              {isSubmit ? <span>Submitting</span> : <span>Submit</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
