import React from "react";
import Button from 'react-bootstrap/Button';

// import DonateButton from "../../DonateButton";

export const Donations = () => {
    const handleSubmit = event => {
        event.preventDefault();}
  return (
    <div className="pageContainer">
      <h1>Support 5 Pillars Cemetary</h1>
        <b></b>
    
        <h2> Donate </h2>
            <p>
              <br></br>
                Support the Five Pillars Cemetery by donating! If you wish to do so, please fill out the form below. Your genorisity is greatly appreciated!
                
            </p><b></b>

        
        
        <div>
            <h2> Volunteer</h2>
                <p>
                
                    Want to help out? 
                </p>
                <p>
                <br></br>
                Sign up for volunteering opportunities below.
                    </p>
                <br></br>
          
            
            <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name:
            <input class = "iName" name="name" />
            </p>
          </label>
          <label>
            <p>Email :       
            <input class = "iMail" email = "email">

            </input>
            </p>
          </label>
          <Button type="submit" >Submit</Button>
        </fieldset>

      </form>
        </div>
      

    </div>
    
  );
};
