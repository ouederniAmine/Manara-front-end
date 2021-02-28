import React, { useState, useEffect } from "react";
import Table from "./table";
export default function tableBody() {
  const [length, setLength] = useState(0);
  let name = document.getElementsByClassName("name");
  let articleNum = document.getElementsByClassName("articleNum");
  let joinDate = document.getElementsByClassName("date");
  const send = async (e) => {
    const response = await fetch("/api/parteners", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    function setTable(name, articleNum, joinDate, r) {
      for (let i = 0; i < name.length; i++) {
        name[i].innerHTML = r[i].name;
        articleNum[i].innerHTML = r[i].articleNum;
        joinDate[i].innerHTML = r[i].joinDate;
      }
    }
    const h = response.json().then((r) => {
      setLength(r.length);
      setTable(name, articleNum, joinDate, r);
    });
  };

  window.addEventListener("DOMContentLoaded", send);
  return <Table key={Math.random() * 10} length={length} />;
}
