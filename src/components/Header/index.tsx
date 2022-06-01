import React, { useState } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { MobileNav } from './MobileNav';
import { motion, useCycle } from "framer-motion";

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
  
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header>
      <NavLink to="/" className="header__logo">
      </NavLink>
      <nav className="header-navigation">
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
