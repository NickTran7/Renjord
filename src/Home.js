import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const [productId, setProductID] = useState();
  return (
    <div>
      <form>
        Hello
        <p>Please enter your ID: </p>
        <input
          type="test"
          value={productId}
          onChange={(e) => setProductID(e.target.value)}
        />
        {/* //?<<<<<<<<<<<<<<<< Change to Customer Page>>>>>>>> */}
        <button
          onClick={() => {
            history.push("/datas/" + productId);
          }}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
