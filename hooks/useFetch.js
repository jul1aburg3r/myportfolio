const { useState, useEffect } = React;

/**
 * Custom hook for fetching data from a URL
 * @param {string} url - The URL to fetch data from
 * @returns {Object} Object containing data, loading state, and error
 * @returns {*} returns.data - The fetched data (null if loading or error)
 * @returns {boolean} returns.loading - Loading state indicator
 * @returns {string|null} returns.error - Error message if fetch failed
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
