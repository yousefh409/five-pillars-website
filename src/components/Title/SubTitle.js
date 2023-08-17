import React from 'react';

const SubTitle = ({ content }) => {
  return (
    <h1 className="subtitle-font text-4xl text-black text-left pt-4 pb-1 md: pb-6 px-auto my-2 md:my-4">
      {content}
    </h1>
  );
};

export default SubTitle;
