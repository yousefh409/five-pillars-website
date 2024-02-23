import React from 'react';

const Title = ({ content }) => {
  return (
    <h2 className="title-font text-green-900 text-left py-6 md: pb-6 px-auto my-2 md:my-4">
      {content}
    </h2>
  );
};

export default Title;
