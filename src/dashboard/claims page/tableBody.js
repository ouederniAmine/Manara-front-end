import React, { useState, useEffect } from "react";
import Table from "./table";
export default function tableBody() {
  const [length, setLength] = useState(0);
  let id = document.getElementsByClassName("id");
  let violenceType = document.getElementsByClassName("violenceType");
  let city = document.getElementsByClassName("city");
  let status = document.getElementsByClassName("status");
  let date = document.getElementsByClassName("date");
  let conatiner = document.getElementsByClassName("tableRow");
  const send = async (e) => {
    const response = await fetch("/api/claims", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    function setTable(id, violenceType, city, status, date, r) {
      for (let i = 0; i < id.length; i++) {
        switch (r[i].level) {
          case "orange":
            conatiner[i].style.backgroundColor = "orange";
            break;
          case "jaune":
            conatiner[i].style.backgroundColor = "#f4f952";
            break;
          case "red":
            conatiner[i].style.backgroundColor = "red";
            break;
        }

        id[i].innerHTML = r[i].id;
        violenceType[i].innerHTML = r[i].violenceType;
        city[i].innerHTML = r[i].location;
        status[i].innerHTML = r[i].claimStatus;
        date[i].innerHTML = r[i].date;
      }
    }
    const h = response.json().then((r) => {
      setLength(r.length);
      setTable(id, violenceType, city, status, date, r);
    });
  };

  window.addEventListener("DOMContentLoaded", send);
  return <Table key={Math.random() * 10} length={length} />;
}
