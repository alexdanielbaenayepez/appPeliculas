import React, {useEffect} from "react";
export function UseFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, {signal: abortController.signal})
        .then((response)=> response.json())
        .then((data)=> setData(data))
        .finally (()=> setLoading(false))

 //   return() => abortController.abort
  }, [url]);

  return {data}
}