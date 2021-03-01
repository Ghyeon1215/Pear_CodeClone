import Axios from "axios";
import { useHistory } from "react-router-dom";

export const MainURL = "http://10.156.147.50:8081";
export const FileURL = "http://3.15.177.120:3000";

export function request(method, url, header, data) {
  return Axios({
    method,
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(MainURL + url);
      console.error(e);
    });
}

export function fileRequest(method, url, header, data) {
  return Axios({
    method,
    url: FileURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.error(e);
    });
}

export function useRefresh(method, url, data) {
  const history = useHistory();
  return Axios({
    method: "put",
    url: MainURL + "/auth",
    headers: {
      "X-Refresh-Token":
        /* "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTAzNjE1OTYsInN1YiI6IjIwMTIwMWtlYkBkc20uaHMua3IiLCJleHAiOjE2MTAzNjE3MTYsInR5cGUiOiJyZWZyZXNoX3Rva2VuIn0.8sq03qagvs3fV6zHYaa3XclEmRCnQ2vQd6LpryMjEUM", */
        localStorage.getItem("refresh-token"),
    },
    data: data,
  })
    .then((res) => {
      localStorage.setItem("access-token", res.data.access_token);
    })
    .catch(() => {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      history.push("/");
    });
}
