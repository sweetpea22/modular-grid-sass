import React, { useState } from 'react';
import './index.scss';
import {motion} from 'framer-motion';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { MenuToggle } from './MenuToggle';


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

const animateBg = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 1200px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 1200px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const animateMenu = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const animateOpacity = {
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000}
    }
  },
  open: {
    y: 0,
    opacity: 1,
    transition: { 
      delay: 1,
      y: { stiffness: 1000, velocity: -400}
    },
  }
}

const animateMenuItem = {
  closed: {
    y: -25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000}
    }
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -400}
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
      className='menuItems'>
      <button onClick={() => toggleOpen(!isOpen)}>Menu Item A</button>
      <motion.div className='bg' variants={animateBg}></motion.div>
      <motion.div className='subMenu' variants={animateMenu}>
        <motion.h4 variants={animateMenuItem}>Browse all</motion.h4>
        <div className='rightColumn'>
          <motion.li variants={animateMenuItem}>
            <NavLink to={'/'}><p>About</p></NavLink>
            <motion.h5 variants={animateOpacity}>Learn more about the company</motion.h5>
          </motion.li>
        </div>
      </motion.div>
      </motion.div>
    </header>
  );
};
