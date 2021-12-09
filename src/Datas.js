import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datas = () => {
  const { error, isPending, data } = useFetch(
    "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/products"
  );
  console.log(data);

  //? data return is Javascript Object

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data &&
        data.products.map((items) => (
          <div className="data-table" key={items.productId}>
            <Link to={`/datas/${items.productId}`}>
              <p key={items.productId}>Product ID: {items.productId}</p>
              <p key={items.photo}>
                <b>Photo:</b> {items.photo}
              </p>
              <p key={items.chainType}>Chain Type:{items.chainType}</p>
              <p key={items.email}>Email: {items.email}</p>
              <p key={items.phone}>Phone: {items.phone}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Datas;
