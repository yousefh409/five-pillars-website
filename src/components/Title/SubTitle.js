import React from 'react';

const SubTitle = ({ content }) => {
  return (
    <h3 className="text-xl subtitle-font text-black text-left px-auto my-2 md:my-4">
      {content}
    </h3>
  );
};

export default SubTitle;
