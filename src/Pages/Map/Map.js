import React from 'react';
import Block from '../../components/Map/Block';
import EmptyGrave from '../../components/Map/EmptyGrave';
import Grave from '../../components/Map/Grave';
import Row from '../../components/Map/Row';
import BigWalkway from '../../components/Map/BigWalkway';
import Title from '../../components/Title/Title';

import Walkway from '../../components/Map/BigWalkway';
import WalkwayPathHorizontal from '../../components/Map/WalkwayPathHorizontal';
import WalkwayPathVertical from '../../components/Map/WalkwayPathVertical';
import './Map.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import ReactSearchBox from 'react-search-box';
import { scrollIntoView } from 'seamless-scroll-polyfill';
import SubTitle from '../../components/Title/SubTitle';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { BookLoader } from "react-awesome-loaders";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      selectedId: 'none',
      selectedName: 'none',
      width: 0,
      height: 0,
      selectedSection: 'none',
      sectionIsLoadings: {}
    };
    this.state.fuseConfigs = {
      threshold: 0.6,
      location: 0,
      distance: 100,
      minMatchCharLength: 1,
      keys: ["value"],
      shouldSort: true,
      findAllMatches: true,
    }
    this.addToNamesList = this.addToNamesList.bind(this);
    this.selectSection = this.selectSection.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.selectSearch = this.selectSearch.bind(this)
    this.setIsLoading = this.setIsLoading.bind(this)
    this.isMapLoading = this.isMapLoading.bind(this)
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

  setIsLoading(sectionId, isLoading) {
    let copy = this.state.sectionIsLoadings;
    copy[sectionId] = isLoading;
    this.setState({ sectionIsLoadings: copy});
  }

  isMapLoading() {
    return Object.values(this.state.sectionIsLoadings).includes(true);
  }

  addToNamesList(id, name, dateOfDeath) {
    let copy = this.state.names;
    if (!copy.includes({ key: id, value: name })) {
      copy.push({
        key: id,
        value: name  + ' (DOD: ' + dateOfDeath + ')',
      });
    }
    this.setState({ names: copy });
  }

  selectSection(sectionID) {
    if (sectionID === this.state.selectedSection) {
      this.setState({ selectedSection: 'none' });
    } else {
      this.setState({ selectedSection: sectionID }, () => {
        if (this.state.selectedId != 'none' && this.state.selectedId.slice(0, 2) == sectionID) {
          var element = document.getElementById('grave-' + this.state.selectedId);
          // scrollIntoView(
          //   element, {behavior: 'smooth', block: 'center', inline: 'center'}, {duration: 250}
          // );
        }
      });
    }
  }

  selectSearch(record) {
    var selectedId = record.item.key
    var selectedName = record.item.value  
    this.setState({ selectedId: selectedId, selectedName: selectedName });
    var element = document.getElementById('section-' + selectedId.slice(0, 2));
    // scrollIntoView(
    //   element, {behavior: 'smooth', block: 'center', inline: 'center'}, {duration: 250}
    // );
  }

  render() {
    return (
      <div className="p-6 lg:p-12 pb-24">
        <div>
          <Title content="Map"></Title>
          <SubTitle content="Legend" />
          <div className="bg-green-500 bg-opacity-10 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="ml-5 text-font">&nbsp; • Grave = &nbsp;</div>
              <Grave addToNamesList={() => {}} sectionID={'-'} data={'- - -'} />
            </div>
            <div className="flex items-start">
              <div className="ml-5 text-font">
                &nbsp; • Empty Grave = &nbsp;
              </div>
              <EmptyGrave />
            </div>
            <div className="flex items-start">
              <div className="ml-5 text-font">&nbsp; • Walkway = &nbsp;</div>
              <BigWalkway />
            </div>
          </div>
        </div>
        <div className="m-6">
          <ReactSearchBox
            placeholder="Search for a name here"
            value="Doe"
            leftIcon={<i className={`bi-${'search'}`}></i>}
            iconBoxSize="48px"
            data={this.state.names}
            onSelect={this.selectSearch}
            autoFocus
            fuseConfigs={this.state.fuseConfigs}
          />
        </div>
        <Tooltip id="my-tooltip" />
        {this.isMapLoading()?
          <div>Loading</div>: <div/>}
        {this.state.selectedId !== "none"? 
        <div>
          <span style={{fontWeight: "bold"}}>{this.state.selectedName}</span> is located in {this.state.selectedId[1] == "S"? `Block ${this.state.selectedId[0]}`: `ROW ${this.state.selectedId.slice(0, 2)}`}, Grave #{this.state.selectedId.slice(2, 4)}
        </div>: <div />} 
          <div className={this.isMapLoading()? "mapInvisbible": "mapWrapper"}>
            <div>
              <div className='lineInRow'>
                <div>
                    <div id="section-AS" onClick={this.state.width < 7000? () => {this.selectSection('AS');}: () => {}}>
                        <Block isOnline={true} sectionID="AS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vQYouiU_RLxxvyrSOBa_ZeI1C1HVdSS9YCT1EjoN4PHErLaLUxvBYQM-JAAYCqv3cJnJZC1is6fDsXH/pub?gid=1691084562&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-BS" onClick={this.state.width < 7000? () => {this.selectSection('BS');}: () => {}}>
                        <Block isOnline={true} sectionID="BS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjMfocFAfePqUw7z81ZzSzPx9OQ66xQCbjSvLn1EtboFm_-jiD_5hc7DCmBhEnSdoJ95XXb0gGy6iG/pub?gid=1629584428&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-CS" onClick={this.state.width < 7000? () => {this.selectSection('CS');}: () => {}}>
                        <Block isOnline={true} sectionID="CS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWcOETCDgeSN27-E_B3N-FiRylQxnv-wy7eHiIuk6cung2dlXHrF8dVSWXpMqMfuk4zwhZdi3yChL_/pub?gid=1149264307&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-DS" onClick={this.state.width < 7000? () => {this.selectSection('DS');}: () => {}}>
                        <Block isOnline={true} sectionID="DS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSvhhN5dz76qlD9zKclLyf1W26v4sz4jlZjokVSgEltQq-k2J-ZG76qMQr_upMl4zvlr-o10B5EQ4BW/pub?gid=2001263946&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-ES" onClick={this.state.width < 7000? () => {this.selectSection('ES');}: () => {}}>
                        <Block isOnline={true} sectionID="ES" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTlh9q9jQmQHm-APY7o_rqY8GTKuPxFJXCyiKe2AVZQ5vbEyxSeKxalmIvBsaKlNAkLitpIo60OENc4/pub?gid=1180809030&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-FS" onClick={this.state.width < 7000? () => {this.selectSection('FS');}: () => {}}>
                        <Block isOnline={true} sectionID="FS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vQC5r7SPVsI7bJ-km94b37YigrJc49ZAHHFTCxPo_wZ9NQvFzOFHwwrtMz26DOGPygFp1cCMntbZsHf/pub?gid=1400478287&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                </div>
                <div>
                    <div id="section-GS" onClick={this.state.width < 7000? () => {this.selectSection('GS');}: () => {}}>
                        <Block isOnline={false} sectionID="GS" fileSource="Five Pillars - Left Side - BLOCK G.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-HS" onClick={this.state.width < 7000? () => {this.selectSection('HS');}: () => {}}>
                        <Block isOnline={false} sectionID="HS" fileSource="Five Pillars - Left Side - BLOCK H.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-IS" onClick={this.state.width < 7000? () => {this.selectSection('IS');}: () => {}}>
                        <Block isOnline={false} sectionID="IS" fileSource="Five Pillars - Left Side - BLOCK I.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-JS" onClick={this.state.width < 7000? () => {this.selectSection('JS');}: () => {}}>
                        <Block isOnline={false} sectionID="JS" fileSource="Five Pillars - Left Side - BLOCK J.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-KS" onClick={this.state.width < 7000? () => {this.selectSection('KS');}: () => {}}>
                        <Block isOnline={false} sectionID="KS" fileSource="Five Pillars - Left Side - BLOCK K.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-LS" onClick={this.state.width < 7000? () => {this.selectSection('LS');}: () => {}}>
                        <Block isOnline={false} sectionID="LS" fileSource="Five Pillars - Left Side - BLOCK L.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                </div>
              </div>
              <div id="section-YY" onClick={this.state.width < 7000? () => {this.selectSection('YY');}: () => {}}>
                    <Row sectionID="YY" filename="Five Pillars - Left Side - ROW BLOCK Y.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
              </div>
            </div>
            <div>
                <div id="section-MS" onClick={this.state.width < 7000? () => {this.selectSection('MS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="MS" fileSource="Five Pillars - Left Side - BLOCK M.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-NS" onClick={this.state.width < 7000? () => {this.selectSection('NS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="NS" fileSource="Five Pillars - Left Side - BLOCK N.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-PS" onClick={this.state.width < 7000? () => {this.selectSection('PS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="PS" fileSource="Five Pillars - Left Side - BLOCK P.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-QS" onClick={this.state.width < 7000? () => {this.selectSection('QS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="QS" fileSource="Five Pillars - Left Side - BLOCK Q.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-RS" onClick={this.state.width < 7000? () => {this.selectSection('RS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="RS" fileSource="Five Pillars - Left Side - BLOCK R.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-SS" onClick={this.state.width < 7000? () => {this.selectSection('SS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="SS" fileSource="Five Pillars - Left Side - BLOCK S.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-TS" onClick={this.state.width < 7000? () => {this.selectSection('TS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="TS" fileSource="Five Pillars - Left Side - BLOCK T.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-US" onClick={this.state.width < 7000? () => {this.selectSection('US');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="US" fileSource="Five Pillars - Left Side - BLOCK U.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-VS" onClick={this.state.width < 7000? () => {this.selectSection('VS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="VS" fileSource="Five Pillars - Left Side - BLOCK V.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-WS" onClick={this.state.width < 7000? () => {this.selectSection('WS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="WS" fileSource="Five Pillars - Left Side - BLOCK W.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-XS" onClick={this.state.width < 7000? () => {this.selectSection('XS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={false} sectionID="XS" fileSource="Five Pillars - Left Side - BLOCK X.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
            </div>

            
            <WalkwayPathVertical />
            
            
            <div>
                <div id="section-AA" onClick={this.state.width < 7000? () => {this.selectSection('AA');}: () => {}}>
                      <Row sectionID="AA" filename="Five Pillars - Right Side - ROW AA.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-BB" onClick={this.state.width < 7000? () => {this.selectSection('BB');}: () => {}}>
                    <Row sectionID="BB" filename="Five Pillars - Right Side - ROW BB.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-CC" onClick={this.state.width < 7000? () => {this.selectSection('CC');}: () => {}}>
                    <Row sectionID="CC" filename="Five Pillars - Right Side - ROW CC.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-DD" onClick={this.state.width < 7000? () => {this.selectSection('DD');}: () => {}}>
                      <Row sectionID="DD" filename="Five Pillars - Right Side - ROW DD.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-EE" onClick={this.state.width < 7000? () => {this.selectSection('EE');}: () => {}}>
                    <Row sectionID="EE" filename="Five Pillars - Right Side - ROW EE.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-FF" onClick={this.state.width < 7000? () => {this.selectSection('FF');}: () => {}}>
                    <Row sectionID="FF" filename="Five Pillars - Right Side - ROW FF.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-GG" onClick={this.state.width < 7000? () => {this.selectSection('GG');}: () => {}}>
                    <Row sectionID="GG" filename="Five Pillars - Right Side - ROW GG.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-HH" onClick={this.state.width < 7000? () => {this.selectSection('HH');}: () => {}}>
                    <Row sectionID="HH" filename="Five Pillars - Right Side - ROW HH.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-II" onClick={this.state.width < 7000? () => {this.selectSection('II');}: () => {}}>
                    <Row sectionID="II" filename="Five Pillars - Right Side - ROW II.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-JJ" onClick={this.state.width < 7000? () => {this.selectSection('JJ');}: () => {}}>
                    <Row sectionID="JJ" filename="Five Pillars - Right Side - ROW JJ.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-KK"   onClick={this.state.width < 7000? () => {this.selectSection('KK');}: () => {}}>
                    <Row sectionID="KK" filename="Five Pillars - Right Side - ROW KK.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-MM"   onClick={this.state.width < 7000? () => {this.selectSection('MM');}: () => {}}>
                    <Row sectionID="MM" filename="Five Pillars - Right Side - ROW MM.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-LL"   onClick={this.state.width < 7000? () => {this.selectSection('LL');}: () => {}}>
                    <Row sectionID="LL" filename="Five Pillars - Right Side - ROW LL.csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId}/>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Map;
