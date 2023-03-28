import React from "react";
import Block from "../Map/Block";
import { Row } from "../Map/Row";

export const Map = () => {
  return (
    <div>
      <h1>Map</h1>
      <Block blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
      <Row filename="Five Pillars - Right Side - ROW AA.csv"/>
    </div>
  );
};
