import { useEffect, useState } from "react";
const AutoID = () => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result;
};

// return (
//   <div>
//     <button
//       onClick={() => {
//         randomNum(15);
//       }}gitgit
//     >
//       Generate Random ID
//     </button>
//   </div>
// );

export default AutoID;
