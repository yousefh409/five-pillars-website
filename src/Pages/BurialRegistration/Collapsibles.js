import axios from 'axios';
import React from 'react';
import { useCollapse } from 'react-collapsed';
// import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BurialReg.css';

// import { ToastContainer } from 'react-toastify';
// import { otherPropsFromToastConfigure } from 'react-toastify';
// import StripeContainer from "./StripeContainer";

export default function Collapsibles() {
  const config = {
    duration: 200,
  };
  const [purchaser, setPurchaser] = useState('');
  const [deceasedName, setDeceasedName] = useState('');
  const [deceasedDay, setDeceasedDay] = useState('');
  const [deceasedMonth, setDeceasedMonth] = useState('');
  const [deceasedYear, setDeceasedYear] = useState('');
  const [calcPrice, setCalcPrice] = useState(false);
  const [price, setPrice] = useState(3900);
  const [isChild, setChild] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [extras, setExtras] = useState('');
  const [specials, setSpecials] = useState('');
  // const [consentToPay, setConsentToPay] = useState(false)
  const [productId, setProductId] = useState(1);

  const typeOfPayment = useState('First Time');

  // const PUBLIC_KEY = "pk_test_51MrSm9Ipjb8xd8GP5cQIYeRavMUQDHys9hzs4GnIPo7TtQW8fiNfaxixJSIdXyIwsKSDAQ2XJCfIiDbUPzRQOHDF00IStxnPIj"

  // const stripeTestPromise = loadStripe(PUBLIC_KEY)

  const calculatePrice = () => {
    if (isChild === 'Yes') {
      if (extras === 'Yes') {
        setPrice(3000);
        setProductId(6);
      } else {
        setPrice(2500);
        setProductId(5);
      }
    } else if (extras === 'No') {
      setPrice(5900);
      setProductId(3);
    } else {
      setPrice(6400);
      setProductId(4);
    }
    setCalcPrice(true);
    console.log(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(prepaid, purchaser, deceasedName, deceasedDay, deceasedMonth, deceasedYear);
    const data = {
      Purchaser_Type: purchaser,
      Name_Of_Deceased: deceasedName,
      Day_Of_Decease: deceasedDay,
      Month_Of_Decease: deceasedMonth,
      Year_Of_Decease: deceasedYear,
      Is_Child: isChild,
      First_Name: firstName,
      Last_Name: lastName,
      City: city,
      Country: country,
      State: state,
      Zip: zip,
      Extras: extras,
      Special_Requests: specials,
      Amount_Paid: price,
      Type_of_Payment: typeOfPayment,
    };
    console.log(
      firstName,
      lastName,
      city,
      country,
      state,
      zip,
      extras,
      specials
    );
    axios
      .post(
        'https://sheet.best/api/sheets/6eaa6a8b-4786-452e-8166-55802a9d7f3d',
        data
      )
      .then((response) => {
        console.log(response);

        setPurchaser('');
        setDeceasedName('');
        setDeceasedDay('');
        setDeceasedMonth('');
        setDeceasedYear('');
        setChild('');
        setFirstName('');
        setLastname('');
        setStreet('');
        setCity('');
        setCountry('');
        setState('');
        setZip('');
        setSpecials('');
        setExtras('');
        setCalcPrice(false);
        setPrice(3900);
        // setConsentToPay(false)
      });
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? 'First Time Buyer' : 'First Time Buyer'}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <br></br>
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleSubmit}
          >
            <label for="purchaser">Type of purchaser? </label>
            <br></br>
            <input
              id="TypeOPurchaser"
              name="purchaser"
              type="text"
              list="purchasers"
              required
              onChange={(e) => setPurchaser(e.target.value)}
              value={purchaser}
            />
            <datalist id="purchasers">
              <option value="Organization">Organization</option>
              <option value="Individual">Individual</option>
            </datalist>
            <br></br>
            <br></br>
            <label for="deceasedName">
              Name of Deceased <span>&#40;</span>First Last<span>&#41;</span>:
            </label>
            <br></br>
            <input
              type="text"
              id="deceasedName"
              name="deceasedName"
              className="form-control"
              placeholder="Please Enter Name of Deceased"
              required
              onChange={(e) => setDeceasedName(e.target.value)}
              value={deceasedName}
            ></input>
            <br></br>
            <br></br>
            <label for="deceasedDay">Deceased Day: </label>
            <input
              type="number"
              min="1"
              max="31"
              id="deceasedDay"
              name="deceasedDay"
              className="form-control"
              required
              onChange={(e) => setDeceasedDay(e.target.value)}
              value={deceasedDay}
            ></input>
            <br></br>
            <br></br>
            <label for="deceasedMonth">Deceased Month: </label>
            <input
              id="deceasedMonth"
              name="deceasedMonth"
              type="text"
              list="months"
              required
              onChange={(e) => setDeceasedMonth(e.target.value)}
              value={deceasedMonth}
            />
            <datalist id="months">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </datalist>
            <br></br>
            <br></br>
            <label for="deceasedYear">Deceased Year: </label>
            <input
              type="number"
              min="2023"
              max="2023"
              id="deceasedYear"
              name="deceasedYear"
              className="form-control"
              required
              onChange={(e) => setDeceasedYear(e.target.value)}
              value={deceasedYear}
            ></input>
            <br></br>
            <br></br>
            <h2>Billing Information</h2>
            <label for="FirstName">First Name</label>
            <br></br>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            ></input>
            <br></br>
            <br></br>
            <label for="LastName">Last Name</label>
            <br></br>
            <input
              type="text"
              id="LastName"
              name="LastName"
              required
              onChange={(e) => setLastname(e.target.value)}
              value={lastName}
            ></input>
            <br></br>
            <br></br>
            <label for="Address">Street Address</label>
            <br></br>
            <input
              type="text"
              id="Address"
              name="Address"
              required
              onChange={(e) => setStreet(e.target.value)}
              value={street}
            ></input>
            <br></br>
            <br></br>
            <label for="City">City</label>
            <br></br>
            <input
              type="text"
              id="City"
              name="City"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
            ></input>
            <br></br>
            <br></br>
            <label for="Country">Country</label>
            <br></br>
            <input
              list="country"
              type="text"
              name="country"
              class="datalist-input"
              required
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <datalist id="country">
              <option value="Afghanistan" />
              <option value="Albania" />
              <option value="Algeria" />
              <option value="American Samoa" />
              <option value="Andorra" />
              <option value="Angola" />
              <option value="Anguilla" />
              <option value="Antarctica" />
              <option value="Antigua and Barbuda" />
              <option value="Argentina" />
              <option value="Armenia" />
              <option value="Aruba" />
              <option value="Australia" />
              <option value="Austria" />
              <option value="Azerbaijan" />
              <option value="Bahamas" />
              <option value="Bahrain" />
              <option value="Bangladesh" />
              <option value="Barbados" />
              <option value="Belarus" />
              <option value="Belgium" />
              <option value="Belize" />
              <option value="Benin" />
              <option value="Bermuda" />
              <option value="Bhutan" />
              <option value="Bolivia" />
              <option value="Bosnia and Herzegovina" />
              <option value="Botswana" />
              <option value="Bouvet Island" />
              <option value="Brazil" />
              <option value="British Indian Ocean Territory" />
              <option value="Brunei Darussalam" />
              <option value="Bulgaria" />
              <option value="Burkina Faso" />
              <option value="Burundi" />
              <option value="Cambodia" />
              <option value="Cameroon" />
              <option value="Canada" />
              <option value="Cape Verde" />
              <option value="Cayman Islands" />
              <option value="Central African Republic" />
              <option value="Chad" />
              <option value="Chile" />
              <option value="China" />
              <option value="Christmas Island" />
              <option value="Cocos (Keeling) Islands" />
              <option value="Colombia" />
              <option value="Comoros" />
              <option value="Congo" />
              <option value="Congo, The Democratic Republic of The" />
              <option value="Cook Islands" />
              <option value="Costa Rica" />
              <option value="Cote D'ivoire" />
              <option value="Croatia" />
              <option value="Cuba" />
              <option value="Cyprus" />
              <option value="Czech Republic" />
              <option value="Denmark" />
              <option value="Djibouti" />
              <option value="Dominica" />
              <option value="Dominican Republic" />
              <option value="Ecuador" />
              <option value="Egypt" />
              <option value="El Salvador" />
              <option value="Equatorial Guinea" />
              <option value="Eritrea" />
              <option value="Estonia" />
              <option value="Ethiopia" />
              <option value="Falkland Islands (Malvinas)" />
              <option value="Faroe Islands" />
              <option value="Fiji" />
              <option value="Finland" />
              <option value="France" />
              <option value="French Guiana" />
              <option value="French Polynesia" />
              <option value="French Southern Territories" />
              <option value="Gabon" />
              <option value="Gambia" />
              <option value="Georgia" />
              <option value="Germany" />
              <option value="Ghana" />
              <option value="Gibraltar" />
              <option value="Greece" />
              <option value="Greenland" />
              <option value="Grenada" />
              <option value="Guadeloupe" />
              <option value="Guam" />
              <option value="Guatemala" />
              <option value="Guinea" />
              <option value="Guinea-bissau" />
              <option value="Guyana" />
              <option value="Haiti" />
              <option value="Heard Island and Mcdonald Islands" />
              <option value="Holy See (Vatican City State)" />
              <option value="Honduras" />
              <option value="Hong Kong" />
              <option value="Hungary" />
              <option value="Iceland" />
              <option value="India" />
              <option value="Indonesia" />
              <option value="Iran, Islamic Republic of" />
              <option value="Iraq" />
              <option value="Ireland" />
              <option value="Israel" />
              <option value="Italy" />
              <option value="Jamaica" />
              <option value="Japan" />
              <option value="Jordan" />
              <option value="Kazakhstan" />
              <option value="Kenya" />
              <option value="Kiribati" />
              <option value="Korea, Democratic People's Republic of" />
              <option value="Korea, Republic of" />
              <option value="Kuwait" />
              <option value="Kyrgyzstan" />
              <option value="Lao People's Democratic Republic" />
              <option value="Latvia" />
              <option value="Lebanon" />
              <option value="Lesotho" />
              <option value="Liberia" />
              <option value="Libyan Arab Jamahiriya" />
              <option value="Liechtenstein" />
              <option value="Lithuania" />
              <option value="Luxembourg" />
              <option value="Macao" />
              <option value="Macedonia, The Former Yugoslav Republic of" />
              <option value="Madagascar" />
              <option value="Malawi" />
              <option value="Malaysia" />
              <option value="Maldives" />
              <option value="Mali" />
              <option value="Malta" />
              <option value="Marshall Islands" />
              <option value="Martinique" />
              <option value="Mauritania" />
              <option value="Mauritius" />
              <option value="Mayotte" />
              <option value="Mexico" />
              <option value="Micronesia, Federated States of" />
              <option value="Moldova, Republic of" />
              <option value="Monaco" />
              <option value="Mongolia" />
              <option value="Montserrat" />
              <option value="Morocco" />
              <option value="Mozambique" />
              <option value="Myanmar" />
              <option value="Namibia" />
              <option value="Nauru" />
              <option value="Nepal" />
              <option value="Netherlands" />
              <option value="Netherlands Antilles" />
              <option value="New Caledonia" />
              <option value="New Zealand" />
              <option value="Nicaragua" />
              <option value="Niger" />
              <option value="Nigeria" />
              <option value="Niue" />
              <option value="Norfolk Island" />
              <option value="Northern Mariana Islands" />
              <option value="Norway" />
              <option value="Oman" />
              <option value="Pakistan" />
              <option value="Palau" />
              <option value="Palestinian Territory, Occupied" />
              <option value="Panama" />
              <option value="Papua New Guinea" />
              <option value="Paraguay" />
              <option value="Peru" />
              <option value="Philippines" />
              <option value="Pitcairn" />
              <option value="Poland" />
              <option value="Portugal" />
              <option value="Puerto Rico" />
              <option value="Qatar" />
              <option value="Reunion" />
              <option value="Romania" />
              <option value="Russian Federation" />
              <option value="Rwanda" />
              <option value="Saint Helena" />
              <option value="Saint Kitts and Nevis" />
              <option value="Saint Lucia" />
              <option value="Saint Pierre and Miquelon" />
              <option value="Saint Vincent and The Grenadines" />
              <option value="Samoa" />
              <option value="San Marino" />
              <option value="Sao Tome and Principe" />
              <option value="Saudi Arabia" />
              <option value="Senegal" />
              <option value="Serbia and Montenegro" />
              <option value="Seychelles" />
              <option value="Sierra Leone" />
              <option value="Singapore" />
              <option value="Slovakia" />
              <option value="Slovenia" />
              <option value="Solomon Islands" />
              <option value="Somalia" />
              <option value="South Africa" />
              <option value="South Georgia and The South Sandwich Islands" />
              <option value="Spain" />
              <option value="Sri Lanka" />
              <option value="Sudan" />
              <option value="Suriname" />
              <option value="Svalbard and Jan Mayen" />
              <option value="Swaziland" />
              <option value="Sweden" />
              <option value="Switzerland" />
              <option value="Syrian Arab Republic" />
              <option value="Taiwan, Province of China" />
              <option value="Tajikistan" />
              <option value="Tanzania, United Republic of" />
              <option value="Thailand" />
              <option value="Timor-leste" />
              <option value="Togo" />
              <option value="Tokelau" />
              <option value="Tonga" />
              <option value="Trinidad and Tobago" />
              <option value="Tunisia" />
              <option value="Turkey" />
              <option value="Turkmenistan" />
              <option value="Turks and Caicos Islands" />
              <option value="Tuvalu" />
              <option value="Uganda" />
              <option value="Ukraine" />
              <option value="United Arab Emirates" />
              <option value="United Kingdom" />
              <option value="United States" />
              <option value="United States Minor Outlying Islands" />
              <option value="Uruguay" />
              <option value="Uzbekistan" />
              <option value="Vanuatu" />
              <option value="Venezuela" />
              <option value="Viet Nam" />
              <option value="Virgin Islands, British" />
              <option value="Virgin Islands, U.S" />
              <option value="Wallis and Futuna" />
              <option value="Western Sahara" />
              <option value="Yemen" />
              <option value="Zambia" />
              <option value="Zimbabwe" />
            </datalist>
            <br></br>
            <br></br>
            <label for="State">
              State <span>&#40;</span>Type N/A if outside US<span>&#41;</span>
            </label>
            <br></br>
            <input
              list="states"
              id="State"
              name="State"
              required
              onChange={(e) => setState(e.target.value)}
              value={state}
            ></input>
            <datalist id="states">
              <option value="Alabama"></option>
              <option value="Alaska"></option>
              <option value="Arizona"></option>
              <option value="Arkansas"></option>
              <option value="California"></option>
              <option value="Colorado"></option>
              <option value="Connecticut"></option>
              <option value="Delaware"></option>
              <option value="District of Columbia"></option>
              <option value="Florida"></option>
              <option value="Georgia"></option>
              <option value="Hawaii"></option>
              <option value="Idaho"></option>
              <option value="Illinois"></option>
              <option value="Indiana"></option>
              <option value="Iowa"></option>
              <option value="Kansas"></option>
              <option value="Kentucky"></option>
              <option value="Louisiana"></option>
              <option value="Maine"></option>
              <option value="Maryland"></option>
              <option value="Massachusetts"></option>
              <option value="Michigan"></option>
              <option value="Minnesota"></option>
              <option value="Mississippi"></option>
              <option value="Missouri"></option>
              <option value="Montana"></option>
              <option value="Nebraska"></option>
              <option value="Nevada"></option>
              <option value="New Hampshire"></option>
              <option value="New Jersey"></option>
              <option value="New Mexico"></option>
              <option value="New York"></option>
              <option value="North Carolina"></option>
              <option value="North Dakota"></option>
              <option value="Ohio"></option>
              <option value="Oklahoma"></option>
              <option value="Oregon"></option>
              <option value="Pennsylvania"></option>
              <option value="Rhode Island"></option>
              <option value="South Carolina"></option>
              <option value="South Dakota"></option>
              <option value="Tennessee"></option>
              <option value="Texas"></option>
              <option value="Utah"></option>
              <option value="Vermont"></option>
              <option value="Virginia"></option>
              <option value="Washington"></option>
              <option value="West Virginia"></option>
              <option value="Wisconsin"></option>
              <option value="Wyoming"></option>
              <option value="N/A"></option>
            </datalist>
            <br></br>
            <br></br>
            <label for="ZipCode">Zip Code</label>
            <br></br>
            <input
              type="number"
              id="Zip Code"
              name="Zip Code"
              required
              onChange={(e) => setZip(e.target.value)}
              value={zip}
            ></input>
            <br></br>
            <br></br>
            <label for="Speshial Requeshts">Special Requests</label> <br></br>
            <input
              type="text"
              id="requests"
              name="requests"
              onChange={(e) => setSpecials(e.target.value)}
              value={specials}
            ></input>
            <br></br>
            <br></br>
            <h2>Pricing Details</h2>
            <br></br>
            <label for="WeekendServices">Weekend or Holiday Service?</label>
            <br></br>
            <input
              list="yesNo"
              id="weekends"
              name="weekends"
              required
              onChange={(e) => setExtras(e.target.value)}
              value={extras}
            ></input>
            <br></br>
            <br></br>
            <label for="ChildQ">
              Was the deceased a child of less than 34" in height?
            </label>
            <br></br>
            <input
              id="isAChild"
              name="isAChild"
              type="text"
              list="yesNo"
              required
              onChange={(e) => setChild(e.target.value)}
              value={isChild}
            />
            <datalist id="yesNo">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </datalist>
            <br></br>
            <br></br>
            {calcPrice ? (
              <p>
                Price: ${price}.00 <br></br>
                <button
                  onClick={() => {
                    fetch('http://localhost:3000/create-checkout-session', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        items: [{ id: productId, quantity: 1 }],
                      }),
                    })
                      .then((res) => {
                        if (res.ok) return res.json();
                        return res.json().then((json) => Promise.reject(json));
                      })
                      .then(({ url }) => {
                        window.location = url;
                      })
                      .catch((e) => {
                        console.error(e.error);
                      });
                  }}
                >
                  Checkout
                </button>
              </p>
            ) : (
              <button onClick={() => calculatePrice()}> Calculate Price</button>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
