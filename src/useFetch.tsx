import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController(); //stop the fetch
    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('fetch aborted')
          }
          setIsPending(false);
          console.log(err.message);
          setError(err.message);
        });
    }, 1000);
    return () => abortCont.abort(); //cleanup
  }, [url]);
  return { isPending, error, data };
};

export default useFetch;
