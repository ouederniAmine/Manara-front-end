import React, { useEffect } from "react";

export default function submitArtice(props) {
  const send = async (res, advicer) => {
    const response = await fetch(`/api/advices/${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response: res,
        advicer: advicer,
      }),
    });
    const body = await response.json().then(console.log("done"));
  };
  useEffect(() => {
    let response = document.getElementById("articleText");
    let button = document.getElementById("send");
    let advicer = document.getElementById("advicer");
    button.onmousedown = () => send(response.value, advicer.value);
  });
  return (
    <div class="col-md-8 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="h4 card-title">Objet:</h4>
          <p className="card-description display-5"> {props.object}</p>
          <form className="forms-sample">
            <div className="form-group">
              <h4>Texte:</h4>
              <p className="display-5">{props.text}</p>
            </div>
            <div className="form-group">
              <h4 className="h4">Votre Nom:</h4>
              <input
                type="text"
                className="form-control"
                id="advicer"
                placeholder="Nom"
              />
            </div>
            <div className="form-group">
              <h4 className="h4">La réponse au demande de conseil:</h4>
              <textarea
                className="form-control"
                id="articleText"
                rows={7}
                defaultValue={""}
              />
            </div>
            <button id="send" type="submit" className="btn btn-success mr-2">
              Submit
            </button>
            <button className="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
