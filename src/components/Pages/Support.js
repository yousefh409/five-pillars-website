import React from "react";

import DonateButton from "../../DonateButton";

export const Support = () => {
    const handleSubmit = event => {
        event.preventDefault();}
  return (
    <div>
      <h1>Support Us
        <b></b>
    
        <h2 class = "bleaseHelp"> Donate 
            <p class = "zubbort">
                Support the Five Pillars Cemetery by donating! If you wish to do so, please fill out the form below. Your genorisity is greatly appreciated!
            </p><b></b>
            <div>
               ------ put donation thing here -----
            </div>
        
        </h2>
        <div>
            <h3 class = "foolentreeing"> Volunteer
                <p class = "vDesk">
                    Want to help out? Sign up for volunteering opportunities below.
                </p>
            
            
            </h3>
            <form onSubmit={handleSubmit}>
        <fieldset class="boxy">
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
        </fieldset>
        <button type="submit">Submit</button>
      </form>
        </div>
      </h1>

    </div>
    
  );
};