/* eslint-disable jsx-a11y/alt-text */
//TODO Delete photo AWS S3
//TODO Client page is empty by default
//TODO Link straight Home page to Client Page using Route on APP.js /client/:id
//TODO No delete Button - take off Lambda Delete HTTPS
//TODO Change Create pagee Add more field DATE ADDED
//TODO CLIENT password input

//? Note : don't put headers, its already declared by Lambda

import useFetch from "./useFetch";
import { useParams } from "react-router";
import { ChainType } from "./res/constant";

const ClientPage = () => {
  const { id = "sad" } = useParams();

  const { data, isPending, error } = useFetch("https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product?productId=" + id);

  //? PUT : send photo. Add with productId#
  //*by "weblink" + file name => htttp:://web.com/catphoto.jpeg
  // fetch("/client/" + setCheck(id).then((res) => console.log(res));
  // console.log(data);
  // console.log(typeof data);
  //? Get name of the file update (catphoto.jpeg)

  //?  Upload (file)= get filename from input
  return (
    <div className="container ">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {data && (
        <div>
          {!id && <p>Nothing to show</p>}
          {/* <h3>ProductID: {data.productId}</h3>
          {data && (
            //? If data.photo is true, load string from data.photo + photo
            //* data.photo = name of img ie catphoto.jpeg
            <div>
              <h4>Info Section:</h4>
              <p> Chain Type:{data.chainType}</p>
              <p key={data.email}>Email: {data.email}</p>
              <p key={data.phone}>Phone: {data.phone}</p>
              <p key={data.photo}>
                Photo: {data.photo}
                {data.photo}
                <img
                  src={`https://renjord.s3.us-east-2.amazonaws.com/${data.photo}`}
                />
              </p>
            </div>
          )} */}
          <h3>Product: {data.productId}</h3>
          <div className="row row-cols-1 row-cols-md-4 justify-content-between align-items-center">
            <div className="col">
              <p>Email: {data.email}</p>
            </div>
            <div className="col">
              <p>Phone: {data.phone}</p>
            </div>
            <div className="col"></div>
          </div>
          <div>
            <table className="table table-bordered table-responsive text-center">
              <thead>
                <tr>
                  {ChainType.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {ChainType.map((item, index) =>
                    data.chainType.toUpperCase() === item.toUpperCase() ? (
                      <td key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#f1356d"
                          className="bi bi-check-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </td>
                    ) : (
                      <td key={index}></td>
                    ),
                  )}
                </tr>
              </tbody>
            </table>
            <div className="row row-cols-1 row-cols-md-3 my-4">
              <div className="col">
                <ul className="client-category">
                  <li className="mb-2">
                    <input type="checkbox" id="fine-silver" name="fine-silver" disabled />
                    <label htmlFor="fine-silver">Fine Silver (99%)</label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="24K" name="24K" disabled />
                    <label htmlFor="24K">24K Gold (99%)</label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="plantium" name="plantium" disabled />
                    <label htmlFor="plantium">Plantium (99%)</label>
                  </li>
                  <li className="">
                    <input type="checkbox" id="other" name="other" disabled />
                    <label htmlFor="other">Other</label>
                  </li>
                </ul>
              </div>
              <div className="col mb-2 mb-md-0">
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-4" htmlFor="size">
                        Size/Length:
                      </label>
                      <div className="col-8">
                        <input type="text" className="client-input w-100" name="size" id="size" disabled />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-4" htmlFor="width">
                        Width:
                      </label>
                      <div className="col-8">
                        <input type="text" className="client-input w-100" name="width" id="width" disabled />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-4" htmlFor="weight">
                        Weight:
                      </label>
                      <div className="col-8">
                        <input type="text" className="client-input w-100" name="weight" id="weight" disabled />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-4" htmlFor="clasp">
                        Clasp:
                      </label>
                      <div className="col-8">
                        <input type="text" className="client-input w-100" name="clasp" id="clasp" disabled />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th>Gemstone(s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="client-gemstone">
                        <textarea className="w-100 h-100 client-input" name="gemstone" disabled></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center">
              <img src={`https://renjord.s3.us-east-2.amazonaws.com/${data.photo}`} className="img-fluid" alt={data.photo} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ClientPage;
