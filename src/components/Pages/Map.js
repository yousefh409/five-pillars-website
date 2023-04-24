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
            selectedId: "none",
            width: 0,
            height: 0,
            selectedSection: "none"
        })
        this.addToNamesList=this.addToNamesList.bind(this);
        this.selectSection=this.selectSection.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
       this.updateWindowDimensions();
       window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
       window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
       this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    addToNamesList(id, name) {
        let copy = this.state.names;
        if (!copy.includes({key: id, value: name})) {
            copy.push({
                key: id,
                value: name
            })
        } 
        this.setState({names: copy});
        console.log(copy)
        // console.log(this.state.names)
    }

    selectSection(sectionID) {
        if (sectionID === this.state.selectedSection) {
            this.setState({selectedSection: "none"})
        } else {
            this.setState({selectedSection: sectionID})
        }
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

                                var my_element = document.getElementById("section-" + this.state.selectedId.slice(0, 2));
                                scrollIntoView(my_element, {
                                    behavior: "smooth",
                                    block: 'center',
                                    inline: 'center'
                                },
                                {
                                    duration: 250 // aprox. the duration that chrome uses,
                                }
                                );

                            }}
                            autoFocus
                        />
                    </div>
                    <Tooltip id="my-tooltip"/>
                    <div className="mapWrapper">
                        <div>
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("AS") }): (() => {})}>
                                <Block sectionID="AS" filename="Five Pillars - Left Side - BLOCK A.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("BS") }): (() => {})}>
                                <Block sectionID="BS" filename="Five Pillars - Left Side - BLOCK B.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("CS") }): (() => {})}>
                                <Block sectionID="CS" filename="Five Pillars - Left Side - BLOCK C.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("DS") }): (() => {})}>
                                <Block sectionID="DS" filename="Five Pillars - Left Side - BLOCK D.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("ES") }): (() => {})}>
                                <Block sectionID="ES" filename="Five Pillars - Left Side - BLOCK E.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("FS") }): (() => {})}>
                                <Block sectionID="FS" filename="Five Pillars - Left Side - BLOCK F.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                        </div>
                        <div>
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("GS") }): (() => {})}>
                                <Block sectionID="GS" filename="Five Pillars - Left Side - BLOCK G.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("HS") }): (() => {})}>
                                <Block sectionID="HS" filename="Five Pillars - Left Side - BLOCK H.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("IS") }): (() => {})}>
                                <Block sectionID="IS" filename="Five Pillars - Left Side - BLOCK I.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("JS") }): (() => {})}>
                                <Block sectionID="JS" filename="Five Pillars - Left Side - BLOCK J.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("KS") }): (() => {})}>
                                <Block sectionID="KS" filename="Five Pillars - Left Side - BLOCK K.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("LS") }): (() => {})}>
                                <Block sectionID="LS" filename="Five Pillars - Left Side - BLOCK L.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
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
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("AA") }): (() => {})}>
                                 <Row sectionID="AA" filename="Five Pillars - Right Side - ROW AA.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("BB") }): (() => {})}>
                                <Row sectionID="BB" filename="Five Pillars - Right Side - ROW BB.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("CC") }): (() => {})}>
                                <Row sectionID="CC" filename="Five Pillars - Right Side - ROW CC.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("DD") }): (() => {})}>
                                 <Row sectionID="DD" filename="Five Pillars - Right Side - ROW DD.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("EE") }): (() => {})}>
                                <Row sectionID="EE" filename="Five Pillars - Right Side - ROW EE.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("FF") }): (() => {})}>
                                <Row sectionID="FF" filename="Five Pillars - Right Side - ROW FF.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("GG") }): (() => {})}>
                                <Row sectionID="GG" filename="Five Pillars - Right Side - ROW GG.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("HH") }): (() => {})}>
                                <Row sectionID="HH" filename="Five Pillars - Right Side - ROW HH.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("II") }): (() => {})}>
                                <Row sectionID="II" filename="Five Pillars - Right Side - ROW II.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("JJ") }): (() => {})}>
                                <Row sectionID="JJ" filename="Five Pillars - Right Side - ROW JJ.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>
                            <WalkwayPathHorizontal />
                            <div onClick={this.state.width < 7000? (() => { this.selectSection("KK") }): (() => {})}>
                                <Row sectionID="KK" filename="Five Pillars - Right Side - ROW KK.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                            </div>

                    </div>
                </div>
            </div>
        );
    };
}

export default Map;
