import React from 'react';
import './style.scss';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div id='contact'>
        <div className='container-fluid'>
          <div className='row text-center block'>
            <h2>Contact me!</h2>
          </div>
          <IconContext.Provider
            value={{
              color: 'var(--white)',
              size: '3.5rem',
              className: 'iconsFooter',
            }}
          >
            <div className='d-flex flex-md-row  justify-content-around '>
              <a
                href='https://github.com/eduardoaraujogomes'
                target='_blank'
                rel='noreferrer'
              >
                <GoMarkGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/eduaraujofilho/'
                target='_blank'
                rel='noreferrer'
              >
                <BsLinkedin />
              </a>
              <a href='mailto:eduardo_araujo_filho@hotmail.com'>
                <AiOutlineMail />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div className='row text-center block'>
          <h6>Developed by Eduardo de Araújo Gomes Filho - 2021! 🚀</h6>
        </div>
      </div>
    </>
  );
}
