import React from 'react';
import SubTitle from '../../components/Title/SubTitle';
import Title from '../../components/Title/Title';

export const Donations = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="p-12 lg:px-64 pb-24">
      <Title content="Support the Five Pillars Cemetery"></Title>
      <b></b>

      <SubTitle content="Donate" />
      <p className="ml-6">
        Support the Five Pillars Cemetery by donating! If you wish to do so,
        please fill out the form below. Your genorisity is greatly appreciated!
      </p>
      <b></b>

      <div>
        <SubTitle content="Volunteer" />
        <p className="ml-6 mb-2">Want to help out?</p>
        <p className="ml-6 mb-6">
          Sign up for volunteering opportunities below.
        </p>

        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col items-center border border-yellow-300 w-3/4 mx-auto rounded-2xl">
            <div className="flex items-center m-4">
              <div className="text-font text-lg text-gray-800 mr-6 w-16">
                Name:
              </div>
              <input
                className="px-4 py-1 border rounded-md focus:outline-none focus:border-green-600"
                name="name"
              />
            </div>

            <div className="flex items-center">
              <div className="text-font text-lg text-gray-800 mr-6 w-16">
                Email:
              </div>
              <input
                className="px-4 py-1 border rounded-md focus:outline-none focus:border-green-600"
                name="email"
              />
            </div>

            <button
              type="submit"
              class="mx-auto border-0 bg-green-900 px-8 py-2 mt-8 mb-4 rounded-full text-white text-md flex justify-center text-font"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
