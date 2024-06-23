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
      <div class="relative overflow-x-auto rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Gravesite & Burial Costs
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Below are prices for the gravesite and burial, as well as any additional fees. Data on website was last updated as of May 6, 2024, and is prone to change upon arrival.</p>
              </caption>
              <thead class="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Item
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Amount
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Sales Tax
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         Plot
                      </th>
                      <td class="px-6 py-4">
                          $2,100.00
                      </td>
                      <td class="px-6 py-4">
                          
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         Open/Close/All Installation Fees
                      </th>
                      <td class="px-6 py-4">
                          $3,152.00
                      </td>
                      <td class="px-6 py-4">
                          
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         Grave Liner
                      </th>
                      <td class="px-6 py-4">
                          $360.00
                      </td>
                      <td class="px-6 py-4">
                          $36.90
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         Headstone*
                      </th>
                      <td class="px-6 py-4">
                          $500.00
                      </td>
                      <td class="px-6 py-4">
                          $51.25
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         Post-Burial Maintenance Fee
                      </th>
                      <td class="px-6 py-4">
                          $300.00
                      </td>
                      <td class="px-6 py-4">
          
                      </td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr class="font-medium uppercase bg-gray-50 text-black">
                      <th scope="row" class="px-6 py-3">Total</th>
                      <td class="px-6 py-3">$6,412.00</td>
                      <td class="px-6 py-3">$88.15</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         Weekend Rate Increase
                      </th>
                      <td class="px-6 py-4">
                          $750.00
                      </td>
                      <td class="px-6 py-4">
                          
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         After 5:30pm Rate Increase
                      </th>
                      <td class="px-6 py-4">
                          $150.00
                      </td>
                      <td class="px-6 py-4">

                      </td>
                  </tr>
              </tfoot>
          </table>
          <p className='text-s pt-5'>*Note that headstone purchased via retail would coast at least double. Hence, it is offered through us at a volume discount.</p>
      </div>
    </div>
  );
};
