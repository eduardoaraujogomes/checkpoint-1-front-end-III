import React from 'react';

export const Svg = ({ svg }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {svg}
    </svg>
  );
};

export default Svg;
