import React from 'react';
import stars from '../../assets/stars.svg';
import './style.scss';

export default function About() {
  return (
    <>
      <div id='sobre' className='block'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 text-center align-self-center order-md-1 order-2'>
              <img src={stars} alt='stars' className='img-fluid' />
            </div>
            <div className='col-md-6 align-self-center mb-md-0 mb-4 order-md-2 order-1'>
              <h2 className='mb-4 title'>About me</h2>
              <h4 className='mb-4 subtitle'>
                💻 I'm a Full stack web developer.
              </h4>
              <p>
                👨‍💻 I love to write code mostly in JS. 🙌 I also write code in TS
                and Java.
              </p>
              <a
                href='https//'
                className='btn btn-primary button button-primary'
              >
                getting in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
