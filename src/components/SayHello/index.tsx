import React from "react";
import "./styles.css";

function SayHello({ name }: { name: string }) {
  return <div className="say-hello"> hey {name}, how are you doing? </div>;
}

export default SayHello;
