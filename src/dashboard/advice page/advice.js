import React, { useState } from "react";
import Navbar from "../component/navBar";
import SideNavBar from "../component/sideNavBar";
import AdviceTable from "./adviceTable";
import HandleAdvice from "./handleAdvice";
export default function dashboard() {
  const [content, setContent] = useState(<AdviceTable />);
  window.addEventListener("handleAdvice", async (e) => {
    const response = await fetch("/api/advices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const h = response.json().then((r) => {
      r.forEach((element) => {
        if (element.id === parseInt(e.detail.id, 10)) {
          let object = element.object;
          let text = element.text;
          setContent(
            <HandleAdvice object={object} text={text} id={e.detail.id} />
          );
        } else {
          console.log("they aren't equal ", typeof e.detail.id);
        }
      });
    });

    console.log(e.detail.id);
  });

  return (
    <div className="container-scroller">
      <Navbar />
      <div
        style={{ paddingLeft: 0, paddingRight: 0 }}
        className="container-fluid page-body-wrapper"
      >
        <SideNavBar />

        <div className="main-panel">
          <div className="content-wrapper">
            {" "}
            <>{content}</>
          </div>
          <footer className="footer">
            <div className="container-fluid clearfix">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © Mohamed amine 2020
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
