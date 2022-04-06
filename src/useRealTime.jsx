import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function useRealtimeData(
  url,
  timeout = 5000,
  limit,
  page,
  search,
  network_status
) {
  const [data, setData] = useState([]);
  const timerRef = useRef();

  const startLive = () => {
    timerRef.current = setInterval(fetchData, timeout);
  };

  const stopLive = () => {
    clearInterval(timerRef.current);
  };
  const history = useHistory();
  const token = localStorage.getItem("token");
  const fetchData = useCallback(async () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/drivers/get`,
        {
          limit,
          page,
          search,
          network_status,
        },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
    // setData(response.data);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return { data, startLive, stopLive };
}
