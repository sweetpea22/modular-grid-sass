import React, { useState } from 'react';
import { Envelope, Equals, MediumLogo } from 'phosphor-react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { MobileNav } from './MobileNav';

const menu = [
  {
    title: 'Products',
    options: [
      { title: 'Web3.JS', to: 'web3' },
      { title: 'ChainGuardian', to: 'cg' },
      { title: 'Lodestar', to: 'lodestar' },
    ],
  },
  {
    title: 'Services',
    options: [
      { title: 'Audits', to: 'audits' },
      { title: 'Consulting', to: 'consulting' },
      { title: 'Research', to: 'research' },
    ],
  },
  {
    title: 'Company',
    options: [
      { title: 'About us', to: 'about-us' },
      { title: 'Brand', to: 'brand' },
      { title: 'Press', to: 'press' },
      { title: 'Careers', to: 'careers' },
    ],
  },
];

export const Header2: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleHamburgerClick = () => setShowMenu((current) => !current);

  return (
    <header>
      <NavLink to="/" className="header__logo">
        {/* <img src={logofill} alt="ChainSafe logo" /> */}
        {/* <h4>ChainSafe</h4> */}
      </NavLink>
      <nav className="header-navigation">
        {/* <Equals className="header-navigation--hamburger" onClick={handleHamburgerClick} /> */}
        {/* <div className="header-navigation--community header-navigation--big-screen">
          <a href="mailto:info@chainsafe.io" target="_blank" rel="noopener noreferrer">
            <Envelope />
          </a>
          <a href="https://medium.com/chainsafe-systems" target="_blank" rel="noopener noreferrer">
            <MediumLogo />
          </a>
        </div> */}
        {/* lg screen navlinks */}
        <ul className="header-navigation__menu header-navigation--big-screen">
          {menu.map(({ title, options }) => (
            <li key={title}>
              <div>{title}</div>
              <ul>
                {options.map(({ title, to }) => (
                  <li key={title + to}>
                    <NavLink to={to}>{title}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <MobileNav/>
      </nav>
    </header>
  );
};
