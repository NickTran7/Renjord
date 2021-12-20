import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Access-Control-Allow-Origin", "http://renjord.s3-website.us-east-2.amazonaws.com");
      fetch(url, {
        signal: abortCont.signal,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    //? abort the fetch
    //? return clean up useeffect
    return () => abortCont.abort();
  }, [url]); //? whenever url change, use efffect is fired

  return { data, isPending, error };
};

export default useFetch;
