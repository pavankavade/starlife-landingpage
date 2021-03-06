import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="title" style={{ textAlign: "center" }}> <u><h1>{title}</h1></u>
        </div><br />
        <div className="sub"><p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
