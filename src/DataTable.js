/* eslint-disable jsx-a11y/alt-text */

//? Note : don't put headers, its already declared by Lambda
import Datalist from "./DataList";

import useFetch from "./useFetch";
import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";

const DataDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [linkPhoto, setLinkPhoto] = useState("");

  const [filename, selectFilename] = useState(null);

  //? WHAT IS THIS URL??????????????????
  const { data, isPending, error } = useFetch(
    "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product?productId=" +
      id
  );

  console.log(data);
  console.log(typeof data);
  //? Get name of the file update (catphoto.jpeg)
  const handleInputFile = (e) => {
    selectFilename(e.target.files[0]); //?save img.jpeg to useState
  };

  //? Click Delete
  //* Always make it to Json ( JSON.Stringtify)
  const deleteClick = (num) => {
    const x = { productId: num };
    const zdata = JSON.stringify(x);
    const requestData = {
      method: "DELETE",
      body: zdata,
    };
    fetch(
      "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product",
      requestData
    )
      .then((response) => {
        history.push("/datas");
        console.log("Fisnished Delele file: " + response);
      })
      // .then(history.push("/datas"))
      .catch((err) => console.log(err));
  };

  //? Edit Info Click
  const editClick = () => {};
  //?  Upload (file)= get filename from input
  const uploadClick = (file) => {
    const requestOptions = {
      method: "PUT",
      body: file,
      redirect: "follow",
    };
    //? PUT : send photo. Add with productId#
    //*by "weblink" + file name => htttp:://web.com/catphoto.jpeg
    fetch(
      ` https://a08fqjdteh.execute-api.us-east-2.amazonaws.com/v3/renjord/` +
        file.name,
      requestOptions
    )
      .then(() => console.log("SUCCESS!! Sending PHOTO"))

      .then(() => {
        setLinkPhoto("https://renjord.s3.us-east-2.amazonaws.com/" + file.name);

        //? LinkPhoto = web.com/catphoto.jpeg, only get after Upload. Save to setLinkPhoto
      })
      .then(() => {
        console.log(id);
        let x = {
          productId: id,
          updateKey: "photo",
          updateValue: file.name,
        };
        //? PATCH = { productId, "updateKey" : "photo", "updateValue" : file.name }
        const patchValue = JSON.stringify(x);
        console.log(patchValue);
        console.log(typeof patchValue);
        const requestData = {
          method: "PATCH",
          body: patchValue,
          redirect: "follow",
        };
        //? fetch to send img name (catphoto.jpeg) to DB, save to Photo key
        fetch(
          "https://basi4ylpi7.execute-api.us-east-2.amazonaws.com/prod/product",
          requestData
        )
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* //? LinkPhoto only get when Click */}
      {linkPhoto && (
        <div>
          New Photo:
          <img src={linkPhoto} />
        </div>
      )}

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {data && (
        <div>
          <div key={data.photo}>
            <h3>ProductID: {data.productId}</h3>
            {data.photo && (
              //? If data.photo is true, load string from data.photo + photo
              //* data.photo = name of img ie catphoto.jpeg
              <div>
                {data.photo}
                <img
                  src={`https://renjord.s3.us-east-2.amazonaws.com/${data.photo}`}
                />
              </div>
            )}
          </div>

          {/* //? Upload Button */}
          <button
            type="button"
            onClick={() => {
              if (filename !== null) {
                uploadClick(filename);
              }
            }}
          >
            Upload
          </button>

          {/* //? Delete Info Button */}
          <button
            type="button"
            onClick={() => {
              if (window.confirm("You are about to delete account: " + id)) {
                deleteClick(id);
              } else {
                console.log("not delete");
              }
            }}
          >
            Delete (Disable For Now)
          </button>
          {/* //? Change Info Button */}

          {/* //? Input photo Button */}
          <input
            type="file"
            accept="image/*"
            multiple
            id="photoInfo" //? May resize here
            onChange={handleInputFile}
          />
          {data && <Datalist datas={data} />}
        </div>
      )}
    </div>
  );
};
export default DataDetail;
