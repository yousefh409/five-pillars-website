import React from "react";
// import DonateButton from "../../DonateButton";

export const Donations = () => {
    const handleSubmit = event => {
        event.preventDefault();}
  return (
    <div className="pageContainer">
      <h1>Support Us
        <b></b>
    
        <h2> Donate 
            <p>
              <br></br>
                Support the Five Pillars Cemetery by donating! If you wish to do so, please fill out the form below. Your genorisity is greatly appreciated!
                
            </p><b></b>
            <div>
            <br></br>
               ------ put donation thing here -----
            </div>
        
        </h2>
        <div>
            <h2> Volunteer
                <p>
                <br></br>
                    Want to help out? 
                </p>
                <p>
                <br></br>
                Sign up for volunteering opportunities below.
                    </p>
          
            </h2>
            <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p class = "zName">Name
            <input class = "iName" name="name" />
            </p>
          </label>
          <label>
            <p class="zEmail">Email        
            <input class = "iMail" email = "email">

            </input>
            </p>
          </label>
          <button type="submit" >Submit</button>
        </fieldset>

      </form>
        </div>
      </h1>

    </div>
    
  );
};
