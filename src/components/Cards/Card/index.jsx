import React from 'react';
import './style.scss';

export default function Card({ title, img, about, techs }) {
  return (
    <>
      <div className='col-sm-12 col-md-6 mb-5'>
        <h4>{title}</h4>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img
                src={img}
                alt='Avatar'
                style={{ width: '650px', height: '350px' }}
              />
            </div>
            <div className='flip-card-back'>
              <h2>{title}</h2>
              <p>{about}</p>
              <h4>Tenologies/Languages</h4>
              <p>{techs}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
