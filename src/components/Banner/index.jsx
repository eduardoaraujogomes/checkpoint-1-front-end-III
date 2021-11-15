import React from 'react';
import './style.scss';
import developer from '../../assets/developer.svg';

export default function Banner() {
  return (
    <>
      <div id='banner' className='block'>
        <div className='container pt-5 pb-5'>
          <div className='row'>
            <div className='col-md-4 align-self-center mb-md-0 mb-4'>
              <h1>Eduardo de Araújo Gomes Filho</h1>
              <h4 className='mb-4'>Full-Stack Developer</h4>
              <a
                href='https://'
                className='btn btn-primary button button-primary d-lg-inline-block d-block mb-lg-0 mb-2 mr-2'
              >
                about
              </a>
              <a
                href='https://'
                className='btn btn-outline-primary button d-lg-inline-block button-primary-outline d-block'
              >
                Contact
              </a>
            </div>
            <div className='col-md-8 align-self-center text-center'>
              <img src={developer} alt='developer' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
