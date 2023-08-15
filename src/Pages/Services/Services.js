import React from "react";
import "./Services.css";
import {useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/Title/SubTitle";

export const Services = () => {
  const navigate = useNavigate();
  return (
  
    <div className="p-12 lg:px-64 pb-24">

        <Title content="Services"></Title>

      <p class="deOffer"> Our staff can handle burial arrangements. Below is a breakdown of the fees involved in the burial.</p><br></br> 
      <p class="deOffer">To apply for burial arrangements, please fill out the following form: </p> <br></br>
    
      <button onClick={()=>{
        navigate("/zeForm")
      }} class="sacredButton">
        Burial Form
        </button>
  <SubTitle content="Prepaid Gravesite"/>
      <p>For those who already have a gravesite paid for.</p><b></b>
      <p>Services include: </p>
      <p>
      <ul>A. Concrete Liner & Installation </ul>
      <ul>B. Opening & Closing of the Grave</ul>
      <ul>C. Headstone/Marker Including Installation</ul>
      <ul>D. Paver Borders & Marble Chips Around Grave Site </ul>
      <ul>E. Endowment Fee</ul>
      Total: $3900.00
      </p><b></b>
      <SubTitle content="Gravesite and Services"/>
      <p>For those who do not yet have a gravesite, an extra $2000 is needed to purchase one. This package includes all of the preceding services. The total will be $5900.</p>
      

      <SubTitle content="Children"/>
        <p>For children up to 34" in length, the burial fees are $2500.</p>
      
        <SubTitle content="Extra Fees"/>

        <p>
         If the burial is on a weekend or Holiday, an extra $500 will be charged. <br></br><br></br>
         If the burial goes beyond the scheduled time, and extra $150 will be charged per hour. <br></br>
      
        </p>
      
    </div> 
  );
}
