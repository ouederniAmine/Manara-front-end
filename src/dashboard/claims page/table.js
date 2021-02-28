import React, { useEffect } from "react";
import TableRow from "./tableRow";
export default function table(props) {
  let length = props.length;
  let items = [];
  for (let i = 0; i < length; i++) {
    console.log(length);
    items.push(<TableRow key={Math.random() * 10} />);
  }
  return <>{items}</>;
}
