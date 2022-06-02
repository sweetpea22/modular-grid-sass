import React, { useState } from 'react';
import './index.scss';
import {motion} from 'framer-motion';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

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

const ButtonParentVariants = {
  closed: {
    height: "4rem",
    transition: {
      duration: ".5"
    }
  },
  open: {
    height: "100vh",
    background: "black",
    transition: {
      duration: ".5" 
    }
  }
};

const staggerVariants = {
  closed: {
    opacity: 0,
    transition: {
      delay: .3,
      staggerDirection: -1,
    }
  },
  open: {
    opacity: 1,
    transition: {
      delay: .3,
      staggerChildren: 0.05,
      delayChildren: 0.3,
    }
  }
}


export const Header2: React.FC = () => {

  const [isOpen, toggleOpen] = useState(false);

  return (
    <header>
      <motion.div 
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={ButtonParentVariants}
      className='menuItems'>
        <button onClick={() => toggleOpen(!isOpen)}>Menu Item A</button>
      {isOpen && (
        <motion.div 
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        className='bg bg--expanded'>
          <motion.div className='subMenu' variants={staggerVariants}>
            <h4>Browse all</h4>
            <motion.div className='rightColumn'>
              <NavLink to={'/'}><p>About</p></NavLink>
              <NavLink to={'/'}><p>About</p></NavLink>
              <NavLink to={'/'}><p>About</p></NavLink>
              <NavLink to={'/'}><p>About</p></NavLink>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      </motion.div>
    </header>
  );
};
