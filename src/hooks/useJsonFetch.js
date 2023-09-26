import { useState, useEffect } from 'react';

function useJsonFetch(url, options) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setError(response.statusText);
        }
        const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return [data, loading, error];
}

export default useJsonFetch;