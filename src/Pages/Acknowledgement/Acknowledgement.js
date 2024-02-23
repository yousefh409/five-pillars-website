import React from 'react';
import SubTitle from '../../components/Title/SubTitle';
import Title from '../../components/Title/Title';
import './Acknowledgement.css';

export const Acknowledgement = () => {
  return (
    <div className="p-12 lg:px-64 pb-24">
      <div>
        <Title content="Acknowledgements"></Title>
        <SubTitle content="UC Berkeley MTC" />
        <p className="mb-2 ml-6">
        We would like to extend heartfelt appreciation to the UC Berkeley Muslim Tech Collaborative (MTC) for their invaluable contribution in developing the website for the Janazas and the Five Pillars Cemetery. Their dedication and expertise have played a pivotal role in creating a platform that not only provides essential information about the cemetery but also includes a finder tool to locate buried loved ones. Through their innovative approach and commitment to serving the community, the MTC has empowered individuals to navigate the delicate process of locating and honoring their departed family members and friends with ease and efficiency. Their efforts underscore the profound impact that technology can have in enhancing accessibility and providing solace during difficult times.<br></br>
          <br></br>
        We would like to thank the members of MTC who worked on this project, specifically: Selin Musa, Yousef Helal, Abdullah Mansour, Nasreddine Belhoucine, Riyya Ahmed, and Misbah Syed.
        <br></br>
        We would also like to thank members of the comunity who contributed extensivley to making this project a reality: Shazia Kajani, Basil Rizwan, and Imam Tahir.
        <br></br>
        </p>
      </div>
    </div>
  );
};
