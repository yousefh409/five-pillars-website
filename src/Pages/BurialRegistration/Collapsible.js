import axios from 'axios';
import React from 'react';
import { useCollapse } from 'react-collapsed';
// import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BurialReg.css';
import { loadStripe } from '@stripe/stripe-js';
// import { ToastContainer } from 'react-toastify';
// import { otherPropsFromToastConfigure } from 'react-toastify';
// import StripeContainer from "./StripeContainer";
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { countries } from './countries'; // Import the countries array

export default function Collapsible() {
  const config = {
    duration: 200,
  };
  const [prepaid, setPrepaid] = useState('');
  const [purchaser, setPurchaser] = useState('');
  const [deceasedName, setDeceasedName] = useState('');
  // const [deceasedDay, setDeceasedDay] = useState('');
  // const [deceasedMonth, setDeceasedMonth] = useState('');
  // const [deceasedYear, setDeceasedYear] = useState('');
  const [deceasedDate, setDeceasedDate] = useState(''); //have to add this to sheet
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
  const [consentToPay, setConsentToPay] = useState(false);
  // const [productId, setProductId] = useState(1);
  const typeOfPayment = useState('Prepaid');

  const PUBLIC_KEY =
    'pk_test_51MrSm9Ipjb8xd8GP5cQIYeRavMUQDHys9hzs4GnIPo7TtQW8fiNfaxixJSIdXyIwsKSDAQ2XJCfIiDbUPzRQOHDF00IStxnPIj';

  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  const calculatePrice = () => {
    if (isChild === 'Yes') {
      if (extras === 'Yes') {
        setPrice(3000);
        // setProductId(6)
      } else {
        setPrice(2500);
        // setProductId(5)
      }
    } else if (extras === 'No') {
      setPrice(3900);
      // setProductId(1)
    } else {
      setPrice(4400);
      // setProductId(2)
    }
    setCalcPrice(true);
    console.log(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(prepaid, purchaser, deceasedName, deceasedDay, deceasedMonth, deceasedYear);
    const data = {
      Amount_Prepaid: prepaid,
      Purchaser_Type: purchaser,
      Name_Of_Deceased: deceasedName,
      // Day_Of_Decease: deceasedDay,
      // Month_Of_Decease: deceasedMonth,
      // Year_Of_Decease: deceasedYear,
      //add Deceased_Date
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

        setPrepaid('');
        setPurchaser('');
        setDeceasedName('');
        // setDeceasedDay('');
        // setDeceasedMonth('');
        // setDeceasedYear('');
        setDeceasedDate('');
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
        setConsentToPay(false);
      });
  };
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="border-b-4 border-[#d8cdb4] w-full">
        <div
          className="subtitle-font text-3xl bolded text-center w-96 mb-4 rounded-xl center"
          {...getToggleProps()}
        >
          {isExpanded ? 'Prepaid Gravesite ' : 'Prepaid Gravesite '}
          {isExpanded ? (
            <i className="bi bi-chevron-up text-2xl ml-3 mt-1"></i>
          ) : (
            <i className="bi bi-chevron-down text-2xl ml-3 mt-1"></i>
          )}
        </div>
      </div>
      <div className="bg-[#d8cdb4]/[.15] w-full center ">
        <div {...getCollapseProps()}>
          <div>
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              // className="bigMama"
              // className='w-1/2'
            >
              <div className="mt-10 mb-6 mx-auto">
                <label htmlFor="ppaid" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    How much was prepaid?
                  </p>
                </label>
                <input
                  type="number"
                  id="ppaid"
                  name="Prepaid"
                  placeholder="Enter Amount"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setPrepaid(e.target.value)}
                  value={prepaid}
                ></input>
              </div>
              <div className="mb-6">
                <label for="purchaser" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Type of purchaser?
                  </p>
                </label>
                <input
                  id="TypeOPurchaser"
                  name="purchaser"
                  type="text"
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  list="purchasers"
                  required
                  onChange={(e) => setPurchaser(e.target.value)}
                  value={purchaser}
                />
                <datalist>
                  <option value="Organization">Organization</option>
                  <option value="Individual">Individual</option>
                </datalist>
              </div>
              <div className="mb-6">
                <label for="deceasedName" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Name of Deceased{' '}
                  </p>
                </label>
                <input
                  type="text"
                  id="deceasedName"
                  name="deceasedName"
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  placeholder="Please Enter Name of Deceased"
                  required
                  onChange={(e) => setDeceasedName(e.target.value)}
                  value={deceasedName}
                />
              </div>
              {/* <div className="mt-6 mb-6 mx-auto">
              <label htmlFor="deceasedDate" className="head">
                Deceased Date:
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  min="1"
                  max="31"
                  id="deceasedDay"
                  name="deceasedDay"
                  className="inputField"
                  required
                  onChange={(e) => setDeceasedDay(e.target.value)}
                  value={deceasedDay}
                ></input>
                <input
                  id="deceasedMonth"
                  name="deceasedMonth"
                  className="inputField"
                  type="text"
                  list="months"
                  required
                  onChange={(e) => setDeceasedMonth(e.target.value)}
                  value={deceasedMonth}
                />
                <input
                  type="number"
                  min="2023"
                  max="2023"
                  id="deceasedYear"
                  name="deceasedYear"
                  className="inputField"
                  required
                  onChange={(e) => setDeceasedYear(e.target.value)}
                  value={deceasedYear}
                ></input>
              </div>
            </div> */}
              <div className="mt-6 mb-6 mx-auto">
                <label for="deceasedDate" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Deceased Date:{' '}
                  </p>
                </label>
                <input
                  type="date"
                  id="deceasedDate"
                  name="deceasedDate"
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  required
                  onChange={(e) => setDeceasedDate(e.target.value)}
                  value={deceasedDate}
                />
              </div>
              <p className="subtitle-font text-xl mb-4 mt-14">
                Billing Information
              </p>
              <div className="mt-6 mb-6 mx-auto">
                <label for="FirstName" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    First Name:
                  </p>
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                ></input>
              </div>
              <div className="mt-6 mb-6 mx-auto">
                <label for="LastName" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Last Name:
                  </p>
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastName}
                ></input>
              </div>
              <div className="mt-6 mb-6 mx-auto">
                <label for="Address" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Street Address
                  </p>
                </label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setStreet(e.target.value)}
                  value={street}
                ></input>
              </div>
              <div className="mt-6 mb-6 mx-auto">
                <label for="City" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    City{' '}
                  </p>
                </label>
                <input
                  type="text"
                  id="City"
                  name="City"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                ></input>
              </div>
              <div className="mt-6 mb-6 mx-auto">
                <label for="Country" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Country{' '}
                  </p>
                </label>
                <input
                  list="country"
                  type="text"
                  name="country"
                  class="datalist-input"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                ></input>
              </div>
              <datalist id="country">
                {countries.map((countryOption) => (
                  <option
                    key={countryOption.value}
                    value={countryOption.value}
                  />
                ))}
              </datalist>
              <div className="mt-6 mb-6 mx-auto">
                <label for="ZipCode" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Zip Code{' '}
                  </p>
                </label>
                <input
                  type="number"
                  id="ZipCode"
                  name="ZipCode"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setZip(e.target.value)}
                  value={zip}
                ></input>
              </div>

              <div className="mt-6 mb-6 mx-auto">
                <label for="requests" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    Special Requests{' '}
                  </p>
                </label>
                <input
                  type="text"
                  id="requests"
                  name="requests"
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setSpecials(e.target.value)}
                  value={specials}
                ></input>
              </div>

              <p className="subtitle-font text-xl mb-4 mt-14">
                Pricing Calculation
              </p>

              <div className="mt-6 mb-6 mx-auto">
                <label for="weekends" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    {' '}
                    Weekend or Holiday Service?{' '}
                  </p>
                </label>
                <input
                  list="yesNo"
                  id="weekends"
                  name="weekends"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setExtras(e.target.value)}
                  value={extras}
                ></input>
              </div>

              <div className="mt-6 mb-6 mx-auto">
                <label for="isAChild" className="block text-gray-800 mb-2">
                  <p className="font-normal text-font tracking-normal text-md">
                    {' '}
                    Was the deceased less than 34" in height?{' '}
                  </p>
                </label>
                <input
                  id="isAChild"
                  name="isAChild"
                  type="text"
                  list="yesNo"
                  required
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
                  onChange={(e) => setChild(e.target.value)}
                  value={isChild}
                ></input>
              </div>

              <datalist id="yesNo">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </datalist>

              {calcPrice ? (
                <p className="mt-6 mb-6 mx-auto">
                  Price: ${price}.00 <br></br>
                  {consentToPay ? (
                    <Elements stripe={stripeTestPromise}>
                      <PaymentForm />
                    </Elements>
                  ) : (
                    <button onClick={() => setConsentToPay(true)}>
                      Pay with Card
                    </button>
                  )}
                </p>
              ) : (
                <button
                  class="mx-auto border-0 bg-[#c4b99f] px-8 py-2 mt-8 mb-4 rounded-full text-white text-md flex justify-center text-font"
                  onClick={() => calculatePrice()}
                >
                  {' '}
                  Calculate Price
                </button>
              )}
              <button
                class="mx-auto border-0 bg-green-900 px-8 py-2 mt-6 mb-12 rounded-full text-white text-md flex justify-center text-font"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
