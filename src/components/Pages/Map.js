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
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export const Map = () => {
  return (
    <div>
        <Tooltip id="my-tooltip"/>
        <div className="mapWrapper">
            <div>
                <Block sectionID="A" filename="Five Pillars - Left Side - BLOCK A.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="B" filename="Five Pillars - Left Side - BLOCK B.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="C" filename="Five Pillars - Left Side - BLOCK C.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="D" filename="Five Pillars - Left Side - BLOCK D.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="E" filename="Five Pillars - Left Side - BLOCK E.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="F" filename="Five Pillars - Left Side - BLOCK F.csv"/>
            </div>
            <div>
                <Block sectionID="G" filename="Five Pillars - Left Side - BLOCK G.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="H" filename="Five Pillars - Left Side - BLOCK H.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="I" filename="Five Pillars - Left Side - BLOCK I.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="J" filename="Five Pillars - Left Side - BLOCK J.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="K" filename="Five Pillars - Left Side - BLOCK K.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="L" filename="Five Pillars - Left Side - BLOCK L.csv"/>
            </div>
            <WalkwayPathVertical />
            {/* <div>
                <Block sectionID="M" filename="Five Pillars - Left Side - BLOCK G.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="N" filename="Five Pillars - Left Side - BLOCK H.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="P" filename="Five Pillars - Left Side - BLOCK I.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="Q" filename="Five Pillars - Left Side - BLOCK J.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="R" filename="Five Pillars - Left Side - BLOCK K.csv"/>
                <WalkwayPathHorizontal />
                <Block sectionID="S" filename="Five Pillars - Left Side - BLOCK L.csv"/>
            </div> */}
            <WalkwayPathVertical />
            <div>
                <Row sectionID="AA" filename="Five Pillars - Right Side - ROW AA.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="BB" filename="Five Pillars - Right Side - ROW BB.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="CC" filename="Five Pillars - Right Side - ROW CC.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="DD" filename="Five Pillars - Right Side - ROW DD.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="EE" filename="Five Pillars - Right Side - ROW EE.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="FF" filename="Five Pillars - Right Side - ROW FF.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="GG" filename="Five Pillars - Right Side - ROW GG.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="HH" filename="Five Pillars - Right Side - ROW HH.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="II" filename="Five Pillars - Right Side - ROW II.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="JJ" filename="Five Pillars - Right Side - ROW JJ.csv"/>
                <WalkwayPathHorizontal />
                <Row sectionID="KK" filename="Five Pillars - Right Side - ROW KK.csv"/>

            </div>
        </div>
    </div>
  );
};
