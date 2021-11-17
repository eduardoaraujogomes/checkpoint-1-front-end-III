import React, { useState } from 'react';
import './style.scss';
import Svg from '../Svg';
import logo from '../../assets/logo.png';
import { firstSvg, secondSvg } from './svgValues';

function Header() {
  const [svgVal, setSvgVal] = useState(firstSvg);

  const change = () => {
    setSvgVal(svgVal === firstSvg ? secondSvg : firstSvg);
  };

  return (
    <>
      <div id='header'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg '>
            <a className='navbar-brand' href='https://'>
              <img src={logo} alt='logo' style={{ width: '12rem' }} />
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
              <Svg svgVal={svgVal} />
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
                    About
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
                    Contact
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
