import React from "react";
import Block from "../Map/Block";
import EmptyGrave from "../Map/EmptyGrave";
import Grave from "../Map/Grave";
import Row from "../Map/Row";
import BigWalkway from "../Map/BigWalkway";

import Walkway from "../Map/BigWalkway";
import WalkwayPathHorizontal from "../Map/WalkwayPathHorizontal";
import WalkwayPathVertical from "../Map/WalkwayPathVertical";
import "./Map.css";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import ReactSearchBox from "react-search-box";
import { scrollIntoView } from "seamless-scroll-polyfill";

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            names: [],
            selectedId: "none"
        })
        this.addToNamesList=this.addToNamesList.bind(this);
    }

    addToNamesList(id, name) {
        let copy = this.state.names;
        copy.push({
            key: id,
            value: name
        })
        this.setState({names: copy});
    }

    render() {

        return (<div>
                    <div>
                        <p className="legendTitle">Legend</p>
                        <div className="legendRow">
                            <div className="legendOption">&nbsp; • Grave = &nbsp;</div>
                            <Grave addToNamesList={() => {}} sectionID={"-"} data={"- - -"}/>
                        </div>
                        <div className="legendRow">
                            <div className="legendOption">&nbsp; • Empty Grave = &nbsp;</div>
                            <EmptyGrave />
                        </div>
                        <div className="legendRow">
                            <div className="legendOption">&nbsp; • Walkway = &nbsp;</div>
                            <BigWalkway />
                        </div>
                    </div>
                    <div className="searchBar">
                        <ReactSearchBox
                            placeholder="Search for a name here"
                            value="Doe"
                            leftIcon={<>🔍</>}
                            iconBoxSize="48px"
                            data={this.state.names}
                            onSelect={(record) => {
                                this.setState({selectedId: record.item.key})
                                console.log(this.state.selectedId)

                                console.log()
                                var my_element = document.getElementById(this.state.selectedId + "-grave");
                                // window.scrollTo({
                                //     top: my_element.offsetTop,
                                //     behavior:"smooth",
                                //     block: 'center'
                                // });
                                // scrollIntoView(my_element, {
                                //     behavior: "smooth",
                                //     block: 'center',
                                //     // inline: 'center'
                                // },
                                // {
                                //   duration: 250 // aprox. the duration that chrome uses,
                                // }
                                // );

                                // setTimeout(function () {

                            //     scrollIntoView(my_element, {
                            //         behavior: "smooth",
                            //         block: 'center',
                            //         // inline: 'center'
                            //     },
                            //     {
                            //       duration: 250 // aprox. the duration that chrome uses,
                            //     }
                            //     );
                            // }, 250  );
                            }}
                            autoFocus
                        />
                    </div>
                    <Tooltip id="my-tooltip"/>
                    <div className="mapWrapper">
                    
                        <div>
                            <Block sectionID="A" filename="Five Pillars - Left Side - BLOCK A.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="B" filename="Five Pillars - Left Side - BLOCK B.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="C" filename="Five Pillars - Left Side - BLOCK C.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="D" filename="Five Pillars - Left Side - BLOCK D.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="E" filename="Five Pillars - Left Side - BLOCK E.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="F" filename="Five Pillars - Left Side - BLOCK F.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                        </div>
                        <div>
                            <Block sectionID="G" filename="Five Pillars - Left Side - BLOCK G.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="H" filename="Five Pillars - Left Side - BLOCK H.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="I" filename="Five Pillars - Left Side - BLOCK I.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="J" filename="Five Pillars - Left Side - BLOCK J.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="K" filename="Five Pillars - Left Side - BLOCK K.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Block sectionID="L" filename="Five Pillars - Left Side - BLOCK L.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
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
                            <Row sectionID="AA" filename="Five Pillars - Right Side - ROW AA.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="BB" filename="Five Pillars - Right Side - ROW BB.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="CC" filename="Five Pillars - Right Side - ROW CC.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="DD" filename="Five Pillars - Right Side - ROW DD.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="EE" filename="Five Pillars - Right Side - ROW EE.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="FF" filename="Five Pillars - Right Side - ROW FF.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="GG" filename="Five Pillars - Right Side - ROW GG.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="HH" filename="Five Pillars - Right Side - ROW HH.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="II" filename="Five Pillars - Right Side - ROW II.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="JJ" filename="Five Pillars - Right Side - ROW JJ.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>
                            <WalkwayPathHorizontal />
                            <Row sectionID="KK" filename="Five Pillars - Right Side - ROW KK.csv" addToNamesList={this.addToNamesList} selectedId={this.state.selectedId}/>

                    </div>
                </div>
            </div>
        );
    };
}

export default Map;
