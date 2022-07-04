import React from "react";
import { Item } from "../Interfaces";

type Props = Item;

const WrapChild: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div className="wrap-child">
      <img src={image} alt="images" />
      <div className="wrap-child-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WrapChild;
