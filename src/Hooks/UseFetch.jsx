import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true', // Add this header
          }
        });

        // Check if response is successful
        if (!res.ok) {
          throw new Error(`Fetch request failed with status ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message); // Set error message in state
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default UseFetch;
