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

const ClientPage = () => {
  const { id = "sad" } = useParams();

  const { data, isPending, error } = useFetch(
    "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product?productId=" +
      id
  );

  //? PUT : send photo. Add with productId#
  //*by "weblink" + file name => htttp:://web.com/catphoto.jpeg
  // fetch("/client/" + setCheck(id).then((res) => console.log(res));
  // console.log(data);
  // console.log(typeof data);
  //? Get name of the file update (catphoto.jpeg)

  //?  Upload (file)= get filename from input

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {data && (
        <div>
          {!id && <p>Nothing to show</p>}
          <h3>ProductID: {data.productId}</h3>
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
          )}
        </div>
      )}
    </div>
  );
};
export default ClientPage;
