import React from "react";

export default function ApiSend(props) {
  const email = props.email;
  const pwd = props.password;
  const sendPost = async (props) => {
    const rawResponse = await fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password: password }),
    });
    const content = await rawResponse.json();

    console.log(content);
  };

  return (
    <button
      className="btn btn-info btn-md"
      onMouseOver={(event) => {
        console.log(email, pwd, "hey");
      }}
    >
      submit
    </button>
  );
}
