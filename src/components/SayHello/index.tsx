import React from "react";
import "./styles.css";

export interface Props {
  name: string;
}


const SayHello=(props:Props) =>{
  return <div className="say-hello"> hey {props.name}, how are you doing? </div>;
}

export default SayHello;
