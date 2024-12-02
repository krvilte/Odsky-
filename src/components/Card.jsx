import React from "react";
import Input from "./Input";
import Forcast from "./Forcast";
import "../App.css";

function Card() {
  return (
    <section className="card">
      <Input />
      <Forcast />
    </section>
  );
}

export default Card;
