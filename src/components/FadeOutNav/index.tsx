import React, { useState, useEffect } from 'react';
import './index.scss';
import { motion, MotionValue, useViewportScroll } from 'framer-motion';
import { navbarVariants, bgVariants, menuVariants, opacityVariants, menuItemVariants } from './animationVariants';
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

type Props = {}

export const FadeOutNav = (props: Props) => {

  const { scrollY } = useViewportScroll();


  const [hidden, setHidden] = useState(false);
  const [isOpen, toggleOpen] = useState(false);
  
  const update = () => {
    if (scrollY?.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }
  
  useEffect(() => {
    return scrollY.onChange(() => update());
  })



  return (
    <>
      <motion.nav 
        className='navbar'
        variants={navbarVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }} >
        <span className='brand-container'>
          <img src='/logo192.png' alt=""/>
          <h4>ChainSafe</h4>
        </span>
        <motion.div animate={isOpen ? "open" : "closed"} initial="closed" className='navbar__container'>
        <motion.div className='bg' variants={bgVariants}></motion.div>
          <ul className='navbar__menu' >
            {menu.map(({title, options}) => (
              <li onClick={() => toggleOpen(!isOpen)} className='menu-item' key={title}>{title}
              </li> 
            ))}
            <motion.div className='submenu' variants={menuVariants}>
            <motion.h4 variants={menuItemVariants}>Browse all</motion.h4>
            <div className='submenu__right'>
              <motion.li variants={menuItemVariants}>
                <NavLink to={'/'}><p>About</p></NavLink>
                <motion.h5 variants={opacityVariants}>Learn more about the company</motion.h5>
              </motion.li>
            </div>
          </motion.div>
          </ul>
        </motion.div>
      </motion.nav>
    </>
  )
}
