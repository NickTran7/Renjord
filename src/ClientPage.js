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
    <div className="container w-50 text-center">
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
          <div className="row justify-content-between">
            <div className="col"></div>
            <div className="col">
              <p>Email: {data.email}</p>
            </div>
            <div className="col">
              <p>Phone: {data.phone}</p>
            </div>
            <div className="col"></div>
          </div>
          <div>
            <table className="table table-bordered">
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
                        <p>Yes</p>
                      </td>
                    ) : (
                      <td></td>
                    ),
                  )}
                </tr>
              </tbody>
            </table>
            <div className="row my-4">
              <div className="col">
                <ul className="client-category">
                  <li className="mb-2">
                    <input type="checkbox" id="fine-silver" name="fine-silver" />
                    <label for="fine-silver">Fine Silver (99%)</label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="24K" name="24K" />
                    <label for="24K">24K Gold (99%)</label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="plantium" name="plantium" />
                    <label for="plantium">Plantium (99%)</label>
                  </li>
                  <li className="">
                    <input type="checkbox" id="other" name="other" />
                    <label for="other">Other</label>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-3">Size/Length:</label>
                      <div className="col-9">
                        <input type="text" className="client-input w-100" name="size" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-3">Width:</label>
                      <div className="col-9">
                        <input type="text" className="client-input w-100" name="width" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-3">Weight:</label>
                      <div className="col-9">
                        <input type="text" className="client-input w-100" name="weight" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <label className="col-3">Clasp:</label>
                      <div className="col-9">
                        <input type="text" className="client-input w-100" name="clasp" />
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
                        <textarea className="w-100 h-100 client-input" name="gemstone"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <img src={`https://renjord.s3.us-east-2.amazonaws.com/${data.photo}`} className="img-fluid" alt={data.photo} />
          </div>
        </div>
      )}
    </div>
  );
};
export default ClientPage;
