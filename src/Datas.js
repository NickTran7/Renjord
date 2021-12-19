import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Datas = () => {
  const { error, isPending, data } = useFetch(
    "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/products"
  );
  console.log(data);

  //? data return is Javascript Object

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data &&
        data.products.map((items) => (
          <table key={items.productId}>
            <thead>
              <tr>
                <th>ProductId</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Link to={`/datas/${items.productId}`}>
                  <td key={items.productId}> {items.productId}</td>
                  <td key={items.photo}>{items.photo}</td>

                  <td key={items.email}>{items.email}</td>
                  {/* <p key={items.phone}>Phone: {items.phone}</p> */}
                  {/* <td key={items.chainType}>Chain Type:{items.chainType}</td> */}
                </Link>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
};

export default Datas;
