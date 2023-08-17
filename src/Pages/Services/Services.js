import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/Title/SubTitle';

export const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="p-12 lg:px-64 pb-24">
      <Title content="Services"></Title>
      <p class="ml-6 mb-4">
        {' '}
        Our staff can handle burial arrangements. Below is a breakdown of the
        fees involved in the burial.
      </p>
      <p class="ml-6 mb-4">
        To apply for burial arrangements, please fill out the following form:{' '}
      </p>{' '}
      <button
        onClick={() => {
          navigate('/forms');
        }}
        class="sacredButton flex justify-center text-font"
      >
        Burial Form
      </button>
      <SubTitle content="Prepaid Gravesite" />
      <p className="ml-6 mb-4">
        If you have already prepaid for a gravesite, services include:
      </p>
      <p className="ml-10 mb-8">
        <ul className="mb-2">A. Concrete Liner & Installation </ul>
        <ul className="mb-2">B. Opening & Closing of the Grave</ul>
        <ul className="mb-2">C. Headstone/Marker Including Installation</ul>
        <ul className="mb-2">
          D. Paver Borders & Marble Chips Around Grave Site{' '}
        </ul>
        <ul className="mb-2">E. Endowment Fee</ul>
        <br></br>
        Total: $3900.00
      </p>
      <b></b>
      <SubTitle content="Gravesite and Services" />
      <p className="ml-6 mb-8">
        For those who do not yet have a gravesite, an extra $2000 is needed to
        purchase one. This package includes all of the preceding services. The
        total will be $5900.
      </p>
      <SubTitle content="Children" />
      <p className="ml-6 mb-8">
        For children up to 34" in length, the burial fees are $2500.
      </p>
      <SubTitle content="Extra Fees" />
      <p className="ml-6 mb-4">
        If the burial is on a weekend or Holiday, an extra $500 will be charged.{' '}
      </p>
      <p className="ml-6 mb-4">
        If the burial goes beyond the scheduled time, and extra $150 will be
        charged per hour.
      </p>
    </div>
  );
};
