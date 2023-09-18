import React from 'react';
import bury from '../../5Pillars.jpg';
import ImageCarousel from './ImageCarousel';

export const Homepage = () => {
  return (
    <>
      <div className="flex justify-center items-center md:pt-6 pb-8 px-auto sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="flex justify-center">
            <img
              src={bury}
              alt=""
              className="w-108"
              style={{ width: '600px' }}
            />
          </div>
          <div className="w-108 flex flex-col min-w-screen">
            <div className="title-font text-4xl text-green-900 text-left py-6 md: pb-6 px-10 my-2 md:my-4">
              About Five Pillars
            </div>
            <p className="text-left px-10">
              5 Pillars Cemetery is the first and the oldest cemetery for
              Muslims in the San Francisco-Bay Area. Efforts to search for land
              and establish a Muslim-owned cemetery started around the year
              1994–1995. As the Muslim population continues to grow, the need
              for a Muslim cemetery to complement the funeral services and
              related facilities at mosques is a priority to ensure that the
              Islamic traditions of burial are preserved for our families now
              and in the future.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-6">
        <div className="title-font text-center text-2xl text-black pt-4 pb-1 md: pb-6 px-auto my-2 md:my-4">
          In the Name of Allãh, the Most Beneficent, the Most Merciful
        </div>
        <div className="flex justify-center items-center p-4">
          <p className="text-3xl">
            إِنَّا لِلّهِ وَإِنَّـا إِلَيْهِ رَاجِعُونَ
          </p>
        </div>
        <p className="text-center">
          "Truly! To Allãh we belong and truly, to Him we shall return”
          (Al-Qur’an, 2:156)
        </p>
      </div>

      <div class="flex items-center justify-center pt-6 pb-16 ">
        <div class=" mx-auto px-6 ">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto px-12 lg:px-36 ">
            <div class="p-4 m-4 text-center bg-gray-500 bg-opacity-10 rounded-2xl">
              <div className="subtitle-font text-2xl text-center text-black text-left pb-1  px-auto mt-4">
                {' '}
                Visiting Hours
              </div>
              <p className="mx-6 text-center pt-4 pb-8">
                Open 7 days a week including all public and Islamic holidays
              </p>
            </div>

            <div class="p-4 m-4 text-center bg-gray-500 bg-opacity-10 rounded-2xl">
              <div className="subtitle-font text-2xl text-center text-black text-left pb-1  px-auto mt-4">
                {' '}
                Burial Times
              </div>
              <p className="mx-6 text-center pt-4 pb-8">
                Monday-Sunday 10 AM - 5 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ImageCarousel />
      </div>
    </>
  );
};

export default Homepage;
