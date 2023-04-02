import React from "react";
import "./Services.css";
import {useNavigate } from "react-router-dom";
import { BrowserRouter as  Route, Routes } from "react-router-dom";

function formingDeals(){

  return <div> Burial Registration</div>
}

export const Services = () => {
  const navigate = useNavigate();
  return (
  
    <div>
    
      <h1> Services 
      </h1>
      <p class="deOffer"> Our staff can handle burial arrangements. Below is a breakdown of the fees involved in the burial.</p><br></br> 
      <p class="deOffer">To apply for burial arrangements, please fill out the following form: </p> <br></br>
    
      <button onClick={()=>{
        navigate("/zeForm")
      }} class="sacredButton">
        Burial Form
        </button>

      <h2 class = "offer1">Prepaid Gravesite:<b></b>
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
      </h2>
      <h2 class = "offer2">
      Gravesite and Services:<b></b>
      <p>For those who do not yet have a gravesite, an extra $2000 is needed to purchase one. This package includes all of the preceding services. The total will be $5900.</p>
      </h2>

      <h2 >
        Children<b></b>
        <p>For children up to 34" in length, the burial fees are $2500.</p>
      </h2>
      <h2>
        Extra Fees: 
        <p>
          <b></b>
         If the burial is on a weekend or Holiday, an extra $500 will be charged. <br></br><br></br>
         If the burial goes beyond the scheduled time, and extra $150 will be charged per hour. <br></br>
      
        </p>
      </h2>
    </div> 
  );
}

