import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Datas = () => {
  const { error, isPending, data } = useFetch(
    "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/products"
  );
  console.log(data);

  //? data return is Javascript Object

  return (
    <div className="container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div>
          <table className="table table-bordered text-left w-100">
            <thead>
              <tr>
                <th>ProductId</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((items) => (
                <tr>
                  <td>
                    <Link to={`/datas/${items.productId}`}>
                      {items.productId}
                    </Link>
                  </td>
                  <td key={items.productId}> {items.name}</td>

                  <td key={items.email}>{items.email}</td>
                  {/* <p key={items.phone}>Phone: {items.phone}</p> */}
                  {/* <td key={items.chainType}>Chain Type:{items.chainType}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Datas;
