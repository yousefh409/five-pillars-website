import React from "react";
import SubTitle from "../../components/Title/SubTitle";
import Title from "../../components/Title/Title";
import "./NextSteps.css";

export const NextSteps = () => {
  return (

    <div className="p-12 lg:px-64 pb-24">
      <div>

        <Title content="What to do When Someone Dies"></Title>
    <SubTitle content="Introduction"/>             
   <p>
                    The death of someone in the family or of a friend is often a time of great stress and emotion.

                    Quite often people are not familiar with what to do, either from a religious point of view or in terms of the practical steps that need to be completed to bury one’s loved ones.

                    This booklet is intended to address the above needs.

                    The practical steps that are covered relate to the paperwork which needs to be completed to meet legal requirements; and to organising the funeral itself.

                    What is most important to realise is that if you are unsure about any aspect, or if you need help and support, members of the extended family, close friends and your local Mosque are always available to help and consult.

                    It is Sunnah, on hearing of the death of a fellow Muslim, to recite the following brief prayer: <br></br><br></br>


                </p>
                <div className='flex justify-start'>
                <p className="text-2xl">إِنَّا لِلّهِ وَإِنَّـا إِلَيْهِ رَاجِعُونَ</p>

                </div>

              <br></br>
                <p> Translation: <br></br>
                    Indeed to Allãh do we belong and to Him we shall return.
                     </p> <p class="translation">(Sũrah alBaqarah Verse 156, Sahĩh Muslim 918)</p>
                


      </div>
    </div>
  );
};
