import React from 'react';
import './style.scss';

export default function Card({ title, img, about, techs, link }) {
  return (
    <>
      <div className=' col-sm-12 col-md-3 mb-5 mx-md-5 mx-sm-0'>
        <h4 className='mb-5'>{title}</h4>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img
                src={img}
                alt='Avatar'
                style={{ width: '350px', height: '275px' }}
              />
            </div>
            <div className='flip-card-back'>
              <h2>{title}</h2>
              <p>{about}</p>
              <h4>Tenologies/Languages</h4>
              <p>{techs}</p>
              <h4>Repo Link</h4>
              <a href={link} target='_blank' rel='noreferrer'>
                <button className='btn btn-outline-primary button-primary-outline'>
                  {title}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
