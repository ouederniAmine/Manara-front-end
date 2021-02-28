import React from "react";

export default function submitArtice() {
  const send = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const type = document.getElementById("articleType").value;
    const city = document.getElementById("cityInput").value;
    const article = document.getElementById("articleText").value;
    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const response = await fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        type: type,
        city: city,
        articleText: article,
        date: date,
      }),
    });
    const body = await response.json();
  };

  return (
    <div class="col-md-8 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="h3 card-title">Crée un nouveau article</h4>
          <p className="card-description">
            {" "}
            Remplir les champs au desous pour la création de votre article
          </p>
          <form onSubmit={send} className="forms-sample">
            <div className="form-group">
              <label htmlFor="exampleInputName1">Titre</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Titre"
              />
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="exampleFormControlSelect1">
                  Type de l'article:
                </label>
                <select
                  className="form-control form-control-lg"
                  id="articleType"
                >
                  <option>Actualités</option>
                  <option>événements,</option>
                  <option>conseils</option>
                  <option>lois</option>
                  <option>blog</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>File upload</label>

              <div className="input-group col-xs-12">
                <input
                  type="file"
                  name="img[]"
                  className="file-upload-default"
                  accept="image/x-png,image/gif,image/jpeg"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputCity1">City</label>
              <input
                type="text"
                className="form-control"
                id="cityInput"
                placeholder="Location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea1">Contenu de l'article</label>
              <textarea
                className="form-control"
                id="articleText"
                rows={7}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-success mr-2">
              Submit
            </button>
            <button className="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
