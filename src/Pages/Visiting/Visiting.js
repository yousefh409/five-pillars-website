import React from 'react';
import SubTitle from '../../components/Title/SubTitle';
import Title from '../../components/Title/Title';

export const Visiting = () => {
  return (
    <div className="p-12 lg:px-64 pb-24">
      <Title content="Visiting"></Title>

      <SubTitle content="Etiquettes and sunnahs when visiting the grave " />

      <p className="ml-6">
        <ol className="list-decimal list-outside mx-auto font-sans font-asap font-light text-base tracking-wide text-left px-10">
          <li className="mb-4">
            When entering the gravesite, say a general salaam to the believers
            and recite this dua:
          </li>
          <p className="text-center text-xl leading-loose mb-4">
            قُولِي السَّلاَمُ عَلَى أَهْلِ الدِّيَارِ مِنَ الْمُؤْمِنِينَ
            وَالْمُسْلِمِينَ وَيَرْحَمُ اللَّهُ الْمُسْتَقْدِمِينَ مِنَّا
            وَالْمُسْتَأْخِرِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَلاَحِقُونَ
          </p>
          <p>
            {' '}
            Translation: "Peace be upon the inhabitants of this abode from among
            the Believers and the Muslims, and may Allah have mercy on those who
            have gone ahead of us, and those who come later on, and we shall,
            God willing, join you."{' '}
          </p>
          <p className="text-center text-sm mb-4">(Sahih Muslim)</p>
          <li className="mb-2">
            Recite Qur’an with the intention of the reward going to the
            deceased.
          </li>
          <li className="mb-2">
            Make abundant supplication for their forgiveness.
          </li>
          <li className="mb-2">
            Reflect and ponder on the state of the deceased and on one’s own
            state. Visiting the grave is a solemn reminder of death, and
            reflection of such a weighty and inevitable state is important.
          </li>
        </ol>
      </p>

      <SubTitle content="Forbidden Practices" />
      <p className="ml-6">
        As with all things, there are boundaries that we must stay within, as
        defined by the Shari'ah. Visiting the grave is an action that requires
        composure and solemnity. One should avoid excessive crying and wailing,
        which the Prophet ﷺ forbade.
      </p>
    </div>
  );
};
