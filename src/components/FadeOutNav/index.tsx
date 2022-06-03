import React, { useState, useEffect } from 'react';
import './index.scss';
import { motion, MotionValue, useViewportScroll } from 'framer-motion';
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
  
  const update = () => {
    if (scrollY?.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY?.get() > 20 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }
  
  useEffect(() => {
    return scrollY.onChange(() => update());
  })

  const variants = {
    visible: {
      opacity: 1, y: 0
    },
    hidden: {
      opacity: 0, y: -25
    },
  }

  return (
    <>
      <motion.nav 
      className='fadeout-nav'
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }} >
        <span className='brand-container'>
          <img src='/logo192.png' alt=""/>
          <h4>ChainSafe</h4>
        </span>
        <ul className='fadeout-nav__menu fadeout-nav--big-screen'>
          {menu.map(({title, options}) => (
            <li className='menu-item' key={title}>{title}
              {/* <div>{title}</div>
                <ul>
                {options.map(({title, to}) => (
                  <div className='subMenu'>
                    <NavLink className='submenu-item' to={to}>{title}</NavLink>
                  </div>
                ))}
                </ul> */}
            </li> 
          ))}
        </ul>
      </motion.nav>
    </>
  )
}