import React from "react";
import Block from "../Map/Block";
import EmptyGrave from "../Map/EmptyGrave";
import Grave from "../Map/Grave";
import Row from "../Map/Row";
import Walkway from "../Map/Walkway";
import WalkwayPathHorizontal from "../Map/WalkwayPathHorizontal";
import WalkwayPathVertical from "../Map/WalkwayPathVertical";
import "./Map.css";
import ScrollContainer from 'react-indiana-drag-scroll'

export const Map = () => {
  return (
    <div>
        <div>
            <p className="legendTitle">Legend</p>
            <div className="legendRow">
                <div className="legendOption">Grave = </div>
                <Grave sectionID={"-"} data={"- - -"}/>
            </div>
            <div className="legendRow">
                <div className="legendOption">Empty Grave = </div>
                <EmptyGrave />
            </div>
            <div className="legendRow">
                <div className="legendOption">Walkway = </div>
                <Walkway />
            </div>
        </div>
        <div className="mapWrapper">
            <div>
                <Block sectionID="A" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="B" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="C" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="D" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="E" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="F" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
            </div>
            <div>
                <Block sectionID="G" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="H" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="I" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="J" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="K" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="L" blockFile="Five Pillars - Left Side - BLOCK A.csv"/>
            </div>
            <WalkwayPathVertical />
            <div>
                <Row sectionID="AA" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="BB" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="CC" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="DD" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="EE" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="FF" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="GG" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="HH" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="II" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="JJ" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="KK" filename="Five Pillars - Right Side - ROW AA.csv"/>

            </div>
        </div>
    </div>
  );
};
