import React from "react";
import "./Janaza.css"
import Title from "../../components/Title/Title";
import SubTitle from "../../components/Title/SubTitle";

export const Janaza = () => {
  return (
    <div className="p-12 lg:px-64 pb-24">
  
      <Title content="Janaza"></Title>

      {/* <h1>About</h1> */}
      {/* <h1> Organizing Janazah </h1> */}
      <div>
        <SubTitle content="Burial Procedure"/>
      <p> 
          1. A grave is dug deep enough to totally hide the body of the deceased. <br/>
          2. The grave should be always perpendicular (Horizontal) to the direction of Qiblah. <br/>
          3. Only men are allowed to attend the burial. <br/>
          4. All Muslims who are present should remember death, the hereafter, and that one day he too will be buried.<br/>
          5. They should keep quiet (No talking unless it is necessary).<br/>
          6. The deceased’s male relatives are expected to put the body in the grave, putting the body in the grave should be carried out only by Muslim men. <br/>
          7. A female is placed in her grave either by her husband, her sons, her father, her brothers, or her uncle.<br/>
          8. The deceased’s body should be entered to the grave from the middle of the grave <br/>
          9. Those who enter the body of the deceased in the grave should say: Bismilllah wa ala millati rasulilllah, [In the name of Allah and in the faith of the Messenger of Allah] <br/>
          10. The deceased’s body should rest on his right side and should be close to the wall and supported so that the body will not fall back, the deceased’s face should be towards the Qiblah. <br/>
          11. Those who put the deceased in the grave should not have had sexual intercourse with their wives the night before and should be in a state of Tahara.<br/>
          12. They should undo the ties on the head and the feet.<br/>
          13. They should put above the body a layer of wood or big stones, so that earth will not be put directly on the body when they fill the grave with earth. <br/>
          14. After the body is totally covered, it is desirable to throw three handfuls of soil into the grave, with each handful saying: <br/>
          <span className="duaContainer">"Minhaa khalaqnaa kum [From the earth did We create you]<br/></span>
          <span className="duaContainer">Wa feehaa Nu’eedu kum [And into it shall We return you ] <br/></span>
          <span className="duaContainer">Wa minhaa nukhrijukum taaratan ‘ukhraa [And from it shall We bring you out once again]" <br/></span>

      </p>
<SubTitle content="Funeral Prayers - Method"/>
      <p> Some things to keep in mind: <br/>
        <ul>
          <li> It is preferable that Salatul Janazah be performed outside the Mosque/the Musalla.</li>
          <li>All conditions for regular Salat are required in Salatul Janazah such as Tahara, Wudu, clean body and clothes, neeyah (Intention), and facing the Qiblah. </li>
          <li>Muslims should form a minimum of three lines facing the Qiblah. The one most closely related to the deceased (son, father, brother, etc.) is most qualified to lead the Salat, even over the Imam of the Masjid, provided he knows how to conduct the Salatl Janazah. </li>
          <li>If such a person is not available or cannot do it, then the Imam of the Masjid or any other knowledgeable Muslim can lead the prayer </li>
          <li>If there is only one Muslim with the Imam, he should stand behind the Imam. </li>
          <li>The body should be placed in front of the person who leads the prayer; parallel to the lines of the people standing in prayer.</li>
          <li>The head of the deceased should be to the right side. </li>
          <li>The Imam should stand by the middle of a female body and by the head for a male body.</li>
          <li>Behind the Imam, the males stand in lines, then children, then females</li>
          <li>There are NO Rukuh, Sujud, Athan, or Eqama.</li>
        </ul>
      </p>
      <p> Prayer Steps: <br/>
        <ol>
          <li>Having the appropriate neeyah (Intention), raise your hands in the usual manner and say :  "Allahu Akbar ". </li>
          <li>Fold your right hand over the left hand in the usual manner. Recite the Fatiha silently . </li>
          <li>Then say : “Allahu Akbar” and recite the Tashahood, which is provided below: </li> 
          <span className="duaContainer">Allahumma sallee ala-Muhammad wa’ala alee Muhammad kama sallayta ala Ibrahim wa ala alee Ibrahim, wa barik ala Muhammad wa’ala alee Muhammad kama barakta ala Ibrahim wa ala alee Ibrahim, innaka hamidun Majeed. <br/></span>
          <span className="duaContainer">["O Allah! Grant peace to Muhammad and his family as you did to Ibrahim and his family. O Allah! Bless Muhammad and his family as you blessed Ibrahim and his family. Truly, you are Most Glorious and Most Praiseworthy] <br /></span>
          <br/>
          <li> Then say: “Allahu Akbar”</li> 
          <li> Then make dua’ (Supplicate) for the deceased </li>
          <li> Then say: “Allahu Akbar”</li>
          <li>Then make dua (Supplicate) for all dead Muslims. In the case of a dead baby or young child, make dua (Supplicate) for his parents. Then say: "Assalamu alaykum wa rahmatullah", like you say in other Salats. Tasleem can be said only once.</li>
          <li> Transportation to the Cemetery </li>
          After the Salatul Janazah is done, lift the body gently back to the hearse and prepare the convoy for transfer to the cemetery.
        </ol>
      </p>
    </div>
    </div>
  );
};
