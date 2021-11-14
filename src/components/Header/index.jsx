import React, { useState } from 'react';
import './style.scss';
import Svg from '../Svg';
import logo from '../../assets/logo.png';
import { recValue1, recValue2 } from './recValues';

function Header() {
  const [rec, setRec] = useState(recValue1);

  const change = () => {
    setRec(rec === recValue1 ? recValue2 : recValue1);
  };

  return (
    <>
      <div id='header'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light '>
            <a className='navbar-brand' href='https://'>
              <img
                src={logo}
                alt='logo'
                style={{ width: '100px', height: '100px' }}
              />
            </a>
            <button
              onClick={change}
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <Svg rec={rec} />
            </button>
            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='https://'
                  >
                    About me
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='https://'
                  >
                    Tecnologies
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='https://'
                  >
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='https://'
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
