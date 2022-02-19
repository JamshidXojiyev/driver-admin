import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export function useRealtimeData(url, timeout = 5000) {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get(url);
    setData(response.data);
  }, []);

  useEffect(() => {
    const timer = setInterval(fetchData, timeout);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return data;
}
