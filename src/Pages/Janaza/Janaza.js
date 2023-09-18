import React from 'react';
import './Janaza.css';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/Title/SubTitle';

export const Janaza = () => {
  return (
    <div className="p-12 lg:px-64 pb-24">
      <Title content="Janaza"></Title>

      {/* <h1>About</h1> */}
      {/* <h1> Organizing Janazah </h1> */}
      <div>
        <SubTitle content="Burial Procedure" />
        <ol className="list-decimal list-outside mx-auto font-sans font-asap font-light text-base tracking-wide text-left px-10">
          <li className="mb-2">
            A grave is dug deep enough to totally hide the body of the deceased.
          </li>
          <li className="mb-2">
            The grave should be always perpendicular (Horizontal) to the
            direction of Qiblah.
          </li>
          <li className="mb-2">Only men are allowed to attend the burial. </li>
          <li className="mb-2">
            All Muslims who are present should remember death, the hereafter,
            and that one day he too will be buried.
          </li>
          <li className="mb-2">
            They should keep quiet (No talking unless it is necessary).
          </li>
          <li className="mb-2">
            The deceased’s male relatives are expected to put the body in the
            grave, putting the body in the grave should be carried out only by
            Muslim men.
          </li>
          <li className="mb-2">
            A female is placed in her grave either by her husband, her sons, her
            father, her brothers, or her uncle.
          </li>
          <li className="mb-2">
            The deceased’s body should be entered to the grave from the middle
            of the grave.
          </li>
          <li className="mb-2">
            Those who enter the body of the deceased in the grave should say:
          </li>
          <p className="text-center text-xl leading-loose py-3">
            بِسْمِ اللهِ [وَبِاللهِ] وَعَلَى مِلَّةِ رَسُولِ اللهِ (صلى الله
            عليه وسلم)
          </p>
          <p className="italic text-center text-sm mb-2">
            Bismilllah wa ala millati rasulilllah
          </p>
          <p className="text-center mb-6">
            Translation: "In the name of Allah and in the faith of the Messenger
            of Allah"
          </p>
          <li className="mb-2">
            The deceased’s body should rest on his right side and should be
            close to the wall and supported so that the body will not fall back,
            the deceased’s face should be towards the Qiblah.
          </li>
          <li className="mb-2">
            Those who put the deceased in the grave should not have had sexual
            intercourse with their wives the night before and should be in a
            state of Tahara.
          </li>
          <li className="mb-2">
            They should undo the ties on the head and the feet.
          </li>
          <li className="mb-2">
            They should put above the body a layer of wood or big stones, so
            that earth will not be put directly on the body when they fill the
            grave with earth.
          </li>
          <li className="mb-2">
            After the body is totally covered, it is desirable to throw three
            handfuls of soil into the grave, with each handful saying:
          </li>
          <p className="text-center text-xl leading-loose py-3">
            مِنْهَا خَلَقْنَاكُمْ وَفِيهَا نُعِيدُكُمْ وَمِنْهَا نُخْرِجُكُمْ
            تَارَةً أُخْرَىٰ
          </p>
          <p className="italic text-center text-sm mb-2">
            Minha khalaqnakum wafeeha nuAAeedukum waminha nukhrijukum taratan
            okhra
          </p>
          <p className="text-center mb-2">
            {' '}
            Translation: "From the earth We created you, and into it We will
            return you, and from it We will extract you another time."
          </p>

          <p className="text-center text-sm">(Surah Taha, Ayah 55)</p>
        </ol>
        <SubTitle content="Funeral Prayers - Method" />
        <div className="mx-auto">
          {' '}
          <p className="font-sans font-asap font-light text-base tracking-wide text-left mb-4 ml-4">
            {' '}
            Some things to keep in mind:
          </p>
          <ul className="ml-4">
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              {' '}
              It is preferable that Salatul Janazah be performed outside the
              Mosque/the Musalla.
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              All conditions for regular Salat are required in Salatul Janazah
              such as Tahara, Wudu, clean body and clothes, neeyah (Intention),
              and facing the Qiblah.{' '}
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              Muslims should form a minimum of three lines facing the Qiblah.
              The one most closely related to the deceased (son, father,
              brother, etc.) is most qualified to lead the Salat, even over the
              Imam of the Masjid, provided he knows how to conduct the Salatl
              Janazah.{' '}
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              If such a person is not available or cannot do it, then the Imam
              of the Masjid or any other knowledgeable Muslim can lead the
              prayer{' '}
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              If there is only one Muslim with the Imam, he should stand behind
              the Imam.{' '}
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              The body should be placed in front of the person who leads the
              prayer; parallel to the lines of the people standing in prayer.
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              The head of the deceased should be to the right side.{' '}
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              The Imam should stand by the middle of a female body and by the
              head for a male body.
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              Behind the Imam, the males stand in lines, then children, then
              females
            </li>
            <li className="font-sans font-asap font-light text-base tracking-wide text-left mb-4">
              There are NO Rukuh, Sujud, Athan, or Eqama.
            </li>
          </ul>
        </div>
        <p>
          {' '}
          <p className="font-bold mb-2 mt-8">Prayer Steps: </p>
          <ol className="list-decimal list-outside mx-auto font-sans font-asap font-light text-base tracking-wide text-left px-10">
            <li className="mb-2">
              Having the appropriate neeyah (Intention), raise your hands in the
              usual manner and say : "Allahu Akbar".{' '}
            </li>
            <li className="mb-2">
              Fold your right hand over the left hand in the usual manner.
              Recite the Fatiha silently.{' '}
            </li>
            <li className="mb-2">
              Then say : “Allahu Akbar” and recite the Tashahood, which is
              provided below:{' '}
            </li>
            <br />
            <p className="text-center text-xl leading-loose mb-4">
              التَّحِيَّاتُ لِلّٰهِ، وَالصَّلَوْاتُ، وَالطَّيِّباتُ، السَّلاَمُ
              عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ،
              السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِيْنَ،
              أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللّٰهُ وَأَشْهَدُ أَنَّ
              مُحَمَّداً عَبْدُهُ وَرَسُوْلُهُ
            </p>
            <p className="italic text-center text-sm mb-3">
              Allahumma sallee ala-Muhammad wa’ala alee Muhammad kama sallayta
              ala Ibrahim wa ala alee Ibrahim, wa barik ala Muhammad wa’ala alee
              Muhammad kama barakta ala Ibrahim wa ala alee Ibrahim, innaka
              hamidun Majeed. <br />
            </p>
            <p className="mb-4">
              [Translation: "O Allah! Grant peace to Muhammad and his family as
              you did to Ibrahim and his family. O Allah! Bless Muhammad and his
              family as you blessed Ibrahim and his family. Truly, you are Most
              Glorious and Most Praiseworthy] <br />
            </p>
            <br />
            <li className="mb-2"> Then say: “Allahu Akbar”</li>
            <li className="mb-2">
              {' '}
              Then make dua’ (supplicate) for the deceased{' '}
            </li>
            <li className="mb-2"> Then say: “Allahu Akbar”</li>
            <li className="mb-2">
              Then make dua (supplicate) for all dead Muslims. In the case of a
              dead baby or young child, make dua (supplicate) for his parents.
              Then say: "Assalamu alaykum wa rahmatullah", like you say in other
              Salats. Tasleem can be said only once.
            </li>
            <li className="mb-2"> Transportation to the Cemetery </li>
            <p className="mb-2">
              After the Salatul Janazah is done, lift the body gently back to
              the hearse and prepare the convoy for transfer to the cemetery.
            </p>
          </ol>
        </p>
      </div>
    </div>
  );
};
