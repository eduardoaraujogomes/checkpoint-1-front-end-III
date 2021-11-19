import React from 'react';
import './style.scss';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  let footerIcons = [
    {
      id: 1,
      icon: (
        <a
          href='https://github.com/eduardoaraujogomes'
          target='_blank'
          rel='noreferrer'
        >
          <GoMarkGithub />
        </a>
      ),
    },
    {
      id: 2,
      icon: (
        <a
          href='https://www.linkedin.com/in/eduaraujofilho/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      ),
    },
    {
      id: 3,
      icon: (
        <a href='mailto:eduardo_araujo_filho@hotmail.com'>
          <AiOutlineMail />
        </a>
      ),
    },
  ];

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
              {footerIcons.map(({ id, icon }) => {
                return <React.Fragment key={id}>{icon}</React.Fragment>;
              })}
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
