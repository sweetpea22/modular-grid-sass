import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { motion, useCycle } from "framer-motion";
import './index2.scss';
import classNames from 'classnames'; 

type Props = {}

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
      stiffness: 50,
      restDelta: 9,
    }
  },
};


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
      { title: 'Audits', to: '/services' },
      { title: 'Consulting', to: 'consulting' },
      { title: 'Research', to: 'research' },
    ],
  },
  {
    title: 'Company',
    options: [
      { title: 'About us', to: '/about' },
      { title: 'Brand', to: 'brand' },
      { title: 'Press', to: 'press' },
      { title: 'Careers', to: 'careers' },
    ],
  },
];


const Header3 = (props: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => setShowMenu((current) => !current)

  console.log(isOpen);

  return (
    <>
    <nav className='header-navigation' >
      <span className='brand-container'>
        <img src='/logo192.png' alt=""/>
        <h4>ChainSafe</h4>
      </span>
      <ul className='header-navigation__menu header-navigation--big-screen'>
        {menu.map(({title, options}) => (
          <li className='menu-item' onClick={() => toggleOpen()} key={title}>
            <div>{title}</div>
              <ul>
              {options.map(({title, to}) => (
                <motion.div variants={animateBg} className='subMenu'>
                  <NavLink className='submenu-item' to={to}>{title}</NavLink>
                </motion.div>
              ))}
              </ul>
          </li> 
        ))}
      </ul>
    </nav>
    <motion.div className={classNames('background',)} initial={false} animate={isOpen ? "open" : "closed"}></motion.div>
    </>
  )
}

export default Header3;