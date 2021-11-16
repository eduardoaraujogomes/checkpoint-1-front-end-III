import React from 'react';
import './style.scss';

export default function Icons({ icon, name, description }) {
  return (
    <>
      <div className='col-lg-2 col-2'>
        <img className='imgSize' src={icon} alt={name} />
      </div>
      <div className='col-md-4 mb-5'>
        <h4>{name}</h4>
        <p className='mb-4'>{description}</p>
      </div>
    </>
  );
}
