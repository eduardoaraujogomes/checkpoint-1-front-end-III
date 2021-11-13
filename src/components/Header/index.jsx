import React, { useState } from 'react';

import Svg from '../Svg';
import logo from '../../assets/logo.png';

function Header() {
  const [rec1, rec2] = [
    <>
      <rect
        x='12'
        y='20'
        width='24'
        height='2'
        fill='var(--primary-color)'
      ></rect>
      <rect
        x='20'
        y='26'
        width='16'
        height='2'
        fill='var(--primary-color)'
      ></rect>
    </>,
    <>
      <rect
        x='16.9399'
        y='15.5309'
        width='22'
        height='2'
        fill='var(--primary-color)'
        transform='rotate(45 16.9399 15.5309)'
      ></rect>
      <rect
        x='15.5257'
        y='31.0872'
        width='22'
        height='2'
        fill='var(--primary-color)'
        transform='rotate(-45 15.5257 31.0872)'
      ></rect>
    </>,
  ];

  const [svg, setSvg] = useState(rec1);

  const change = () => {
    console.log(svg);
    setSvg(svg === rec1 ? rec2 : rec1);
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
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <Svg svg={svg} />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
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
