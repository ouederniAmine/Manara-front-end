import React from "react";
import "./style.css";
export default function tableRow() {
  function changePage(id) {
    const event = new CustomEvent("handleAdvice", {
      detail: {
        id: id,
      },
    });
    window.dispatchEvent(event);
  }
  function ButtonDown(e) {
    let id = e.target.parentElement.firstChild.innerHTML;
    changePage(id);
  }
  return (
    <tr onMouseDown={(e) => ButtonDown(e)}>
      <td className="id"> 1</td>
      <td className="object"> Herman Beck </td>
      <td className="text"> Photoshop </td>
      <td className="type"> $ 77.99 </td>
      <td className="date"> May 15, 2015 </td>
      <td className="status"></td>
    </tr>
  );
}
