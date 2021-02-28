import React, { useState } from "react";
import Table from "./table";
export default function tableBody() {
  const [length, setLength] = useState(0);
  let id = document.getElementsByClassName("id");
  let object = document.getElementsByClassName("object");
  let text = document.getElementsByClassName("text");
  let type = document.getElementsByClassName("type");
  let date = document.getElementsByClassName("date");
  let status = document.getElementsByClassName("status");

  const send = async (e) => {
    const response = await fetch("/api/advices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    function setTable(id, object, text, type, date, status, r) {
      for (let i = 0; i < id.length; i++) {
        id[i].innerHTML = r[i].id;
        object[i].innerHTML = r[i].object;
        type[i].innerHTML = r[i].adviceType;
        text[i].innerHTML = r[i].text;
        status[i].innerHTML = r[i].adviceStatus;
        date[i].innerHTML = r[i].date;
      }
    }
    const h = response.json().then((r) => {
      setLength(r.length);
      setTable(id, object, text, type, date, status, r);
    });
  };

  window.addEventListener("DOMContentLoaded", send);
  return <Table key={Math.random() * 10} length={length} />;
}
