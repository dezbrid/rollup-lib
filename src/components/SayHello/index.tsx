import React from "react";
import "./styles.css";
import helloPeter from './assets/hellopeter.jpg';

export interface Props {
  name: string;
}

const SayHello = (props: Props) => {
  return (
    <div className="container">
      <img alt="Hello Peter" src={helloPeter} className="img"/>
      <div className="title"> Hello {props.name} </div>
    </div>
  );
};

export default SayHello;
