import React from "react";
import Button from 'react-bootstrap/Button';
import SubTitle from "../../components/Title/SubTitle";
import Title from "../../components/Title/Title";

// import DonateButton from "../../DonateButton";

export const Donations = () => {
    const handleSubmit = event => {
        event.preventDefault();}
  return (
    <div className="p-12 lg:px-64 pb-24">
        <Title content="Support the Five Pillars Cemetery"></Title>
        <b></b>
    
        <SubTitle content="Donate"/>
            <p>
              <br></br>
                Support the Five Pillars Cemetery by donating! If you wish to do so, please fill out the form below. Your genorisity is greatly appreciated!
                
            </p><b></b>

        
        
        <div>
        <SubTitle content="Volunteer"/>
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
