import axios from "axios";
import React from "react";

export default function test() {
  useEffect(() => {
    axios.post("http://192.168.2.123:8000/report/api/login").then((e) => {
      console.log(e);
    });
  });
  return <div>axios</div>;
}
