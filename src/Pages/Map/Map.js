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
import { hatch } from 'ldrs'

hatch.register()

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
      limit: 10
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
          <div className='flex justify-center items-center m-5'>
            <l-hatch
              size="40"
              stroke="4"
              speed="3.5" 
              color="rgb(20 83 45)" 
            ></l-hatch>
          </div>
          : <div/>}
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
                        <Block isOnline={true} sectionID="GS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRCoAccPUThclMTQxBESdSBNy8YtZ18zH9JqbTj1gBkJDxTaAM2MWumBeq4ZPEEU9C2Qvug0h-zUFKY/pub?gid=860430188&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-HS" onClick={this.state.width < 7000? () => {this.selectSection('HS');}: () => {}}>
                        <Block isOnline={true} sectionID="HS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTj2oxhiX-jHKcpVPfr-SPRf5lUoxxpASJu-R7eElZQRG67cS6_BYuO41kEEDmGSWI8rKkCtp_h5HHo/pub?gid=1247116601&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-IS" onClick={this.state.width < 7000? () => {this.selectSection('IS');}: () => {}}>
                        <Block isOnline={true} sectionID="IS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhqpbXgLt8zjhrSZiEu1Nyq8FouZ8KK0zEdX8S2qpCpRizF_oWQ3lcBshOTkwI2J7YxOtYNdEzFLfj/pub?gid=691815013&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-JS" onClick={this.state.width < 7000? () => {this.selectSection('JS');}: () => {}}>
                        <Block isOnline={true} sectionID="JS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLuFxBnr0BOmPMouxO7wNwmHWnoiXgl9XdvC0vI6KpfnRGRA8mjDewyXa_6SD0kayThuTZLD-kCbjW/pub?gid=1914367870&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-KS" onClick={this.state.width < 7000? () => {this.selectSection('KS');}: () => {}}>
                        <Block isOnline={true} sectionID="KS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTzcVxXhT-wDZKsQVy5rjUx-ko-D6hfmj0couBwfL2IZE_F8AGrNIrdwZGD0EQFYp4iNaWBVFUI_1u/pub?gid=102997822&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                    <WalkwayPathHorizontal />
                    <div id="section-LS" onClick={this.state.width < 7000? () => {this.selectSection('LS');}: () => {}}>
                        <Block isOnline={true} sectionID="LS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTskG2PgzuIhnQVCSQXy4BYhKweYdqjuKzWCcHeOYfBDheZmLLk946R6WDt-_I1KUoqkKnBD_ZHgHvi/pub?gid=214557244&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                    </div>
                </div>
              </div>
              <div id="section-YY" onClick={this.state.width < 7000? () => {this.selectSection('YY');}: () => {}}>
                    <Row sectionID="YY" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOSJ5ebiSq4oLtvHKceSPf9WRxRDeDIzs8cGCm23AjLiq8LrTIUjocEX0RgioBr2leg7E5p_SWVJPH/pub?gid=1851413578&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
              </div>
            </div>
            <div>
                <div id="section-MS" onClick={this.state.width < 7000? () => {this.selectSection('MS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="MS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTSMhnEHg7PSX6nfPttP3hsrEhxfiNvznSovLn5ea0OWJVh94YZ1BdNX41NSoLDjRxZVqJ-t5dLJhK3/pub?gid=210950559&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-NS" onClick={this.state.width < 7000? () => {this.selectSection('NS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="NS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vQHd_e6SuPm0aawwEn43XP0FlbMuJGEeht1M3gFKohkb5mpRzdYKHA0jJmlVToByEMtSL0fdRknrIys/pub?gid=1164052204&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-PS" onClick={this.state.width < 7000? () => {this.selectSection('PS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="PS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vQE_4QOtqumIBBuml9d5tWKj6zsJNS3Wix1o-r7zL3PQD90u6xe7Z7pNiObdjc3ZNdl_G8sD-FnTp7c/pub?gid=1363690174&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-QS" onClick={this.state.width < 7000? () => {this.selectSection('QS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="QS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHtU8YSxTN7ztenVmIYTuHRVqISKIL-zdEYg2MmcTP-Zq1bJR2ScFsFNauK0-sM5KtfpNO_cXbdNqY/pub?gid=419575241&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-RS" onClick={this.state.width < 7000? () => {this.selectSection('RS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="RS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6Vck9690RSGnv6leCB7pO3y0mpXvt--HcJNciYA-LbAtQUYOqFkGk540LDn_-PeTXvYo5qz-HzScd/pub?gid=1566885558&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-SS" onClick={this.state.width < 7000? () => {this.selectSection('SS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="SS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSugDIffwGi5sH9C-NVKO4p2XXYbXZA1lFwUBJfHVtZM347ZPm-vTnaBSznPbs_JPA5BN6s4FoEaPym/pub?gid=1430252574&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-TS" onClick={this.state.width < 7000? () => {this.selectSection('TS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="TS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRtd2RswZgdwbSUPDTnSX3hUPvdoGF0YeOtZlDXDAwQ0mdbxzLtJEfEhhAZO4tK4UBvuJbl-pBYjW-3/pub?gid=1248154152&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-US" onClick={this.state.width < 7000? () => {this.selectSection('US');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="US" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQFNVQp_fvbL3gnkheGcigmF5Gc9oL7krdihWCVFvXw0-jYsZ8gIwle8cWbxuTG8UZ6qKepKr9uPgi/pub?gid=491541212&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-VS" onClick={this.state.width < 7000? () => {this.selectSection('VS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="VS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSttYBIqMfp3CdJeqpOC10b2VmiwnmwQNnXGsmRc38LasOsgMYSHBGMcKyuNhZXABWpiPdj1BJ5bnZ9/pub?gid=11231763&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-WS" onClick={this.state.width < 7000? () => {this.selectSection('WS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="WS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqZkRQS8uRahs6N7WT6fUv0go9bHvOWC5jqVXVUuA-JakCpvdz65FAs015zYZjI7l5_LymXlvBcrTf/pub?gid=532260066&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-XS" onClick={this.state.width < 7000? () => {this.selectSection('XS');}: () => {}}>
                    <Block isSmallBlock={true} isOnline={true} sectionID="XS" fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcMHVGayhpB1OUAsLFpEJZpbfA4R3-3BcoZl50CVDpN7GBcfouXNAnFCOGAoarF8sov2g6l1o4sAtv/pub?gid=1901178241&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
            </div>

            
            <WalkwayPathVertical />
            
            
            <div>
                <div id="section-AA" onClick={this.state.width < 7000? () => {this.selectSection('AA');}: () => {}}>
                    <Row sectionID="AA" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSxY5Imgr1If3BBE8k3LKds21Ir4dP9Qv0WKeYeNlJNSuVykg_KDbWbgIhntm_sHUnXQp477YhRwllq/pub?gid=1534029194&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-BB" onClick={this.state.width < 7000? () => {this.selectSection('BB');}: () => {}}>
                    <Row sectionID="BB" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkjrQtYK3UOwtXHfgnvmAhj_t8Fr-VWNH_lRk5eXPXiI8IJIxJb4suVBCPnOYa1GqMfrmU2uN1Ebg7/pub?gid=10459253&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-CC" onClick={this.state.width < 7000? () => {this.selectSection('CC');}: () => {}}>
                    <Row sectionID="CC" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRaY6M8I2YEVkc8yu6fwmHd-ZtlSSjrRpiL-a4NB4cO7dPGIuYYaR1vpC1RxW_cUmSZ491MQeIJFfOi/pub?gid=613112119&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-DD" onClick={this.state.width < 7000? () => {this.selectSection('DD');}: () => {}}>
                    <Row sectionID="DD" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_chrC1tTkuNYW1jZjMISNMo3R47M_xt4exGTWKWkS6NZ-mKEnYfJkerIOYDXDAEFz1vSc1OjL9Fz3/pub?gid=1852071035&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-EE" onClick={this.state.width < 7000? () => {this.selectSection('EE');}: () => {}}>
                    <Row sectionID="EE" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3AIVJ0SIqMfHtyCtPF9WykIDO9TRYMQVWDG6UqjcUVpeaBMpV5T64pEbW4diUQqQHpwgN5lgjiOhN/pub?gid=35687979&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-FF" onClick={this.state.width < 7000? () => {this.selectSection('FF');}: () => {}}>
                    <Row sectionID="FF" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSYxGFMq9QEWcwJNGZSe_uRXce188bAYGlj63qRB1SzSATnGWstt2Do4r-UkcwW71N60FxgpSMdwW5O/pub?gid=1036142330&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-GG" onClick={this.state.width < 7000? () => {this.selectSection('GG');}: () => {}}>
                    <Row sectionID="GG" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBZzPrBGoohiU5xfVot4-P5PD6y7Sgup2_7uHo8oma1mpmjiTGBA0W8KHy25IemPUnJ7q-1lILd5E_/pub?gid=559665279&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-HH" onClick={this.state.width < 7000? () => {this.selectSection('HH');}: () => {}}>
                    <Row sectionID="HH" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMRVGfC2B1UFDIHdnjB6T-RZdpjMA9WeyLAyqwlxWgLUQtNaPQLEcgqTOzQWkj2VZKvtX03fv1Fsj1/pub?gid=1977812898&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-II" onClick={this.state.width < 7000? () => {this.selectSection('II');}: () => {}}>
                    <Row sectionID="II" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTNaCBA350d1cEGZPAq5tjqnomiESbMuelGhvEZH1bciIdtWgURjZE2UKCPWlRGMyf0h6YpngkNZUbj/pub?gid=1920744782&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-JJ" onClick={this.state.width < 7000? () => {this.selectSection('JJ');}: () => {}}>
                    <Row sectionID="JJ" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTKYmazOkkBPfX0JfwmsrkUghBxiXSR6SceHpPrUpfdQwukaiDXGNKAoGCVbbl0Qo18iD1usCm2Bf2C/pub?gid=934917233&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-KK"   onClick={this.state.width < 7000? () => {this.selectSection('KK');}: () => {}}>
                    <Row sectionID="KK" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmL2MN2rQ7_wuyL82P9GZ6y8Jp_FNhS-sd-rJWjdxJDsbOARHFjzKTDf99F7Dl4uRb0EyDtmDNRad3/pub?gid=544373758&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-MM"   onClick={this.state.width < 7000? () => {this.selectSection('MM');}: () => {}}>
                    <Row sectionID="MM" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWk6PXoMBIYngpx-mwRatYk84UOLN5S0W5p3YF8FN_AYBZOxZ8_cPYu2Hyg2qDRkoBn9zRC-ocI_-3/pub?gid=319635090&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
                <WalkwayPathHorizontal />
                <div id="section-LL"   onClick={this.state.width < 7000? () => {this.selectSection('LL');}: () => {}}>
                    <Row sectionID="LL" isOnline={true} fileSource="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyx_YQBCAPWz34VinKXVQ3DUnZrC77hSa73gd4b2Va2R9LfIk5Yvn2sQHroOSSfn1no7oWzpz3AIGu/pub?gid=1125781368&single=true&output=csv" addToNamesList={this.addToNamesList} selectedSection={this.state.selectedSection} selectedId={this.state.selectedId} setIsLoading={this.setIsLoading}/>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Map;
