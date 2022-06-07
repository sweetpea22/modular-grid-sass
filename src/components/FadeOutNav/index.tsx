import React, { useState, useEffect } from 'react';
import './index.scss';
import { motion, useViewportScroll } from 'framer-motion';
import { navbarVariants, bgVariants, menuVariants, opacityVariants, menuItemVariants } from './animationVariants';
import { NavLink } from 'react-router-dom';
import { MenuToggle } from '../Header/MenuToggle';

const menu = [
  {
    title: 'Products',
    to: '/products',
    options: [
      { title: 'Storage', to: 'web3', desc: 'Integrate decentralized storage in seconds.' },
      { title: 'Files', to: 'cg', desc: 'Encrypted storage on Filecoin.'  },
      { title: 'ChainBridge', to: 'lodestar', desc: 'Cross-chain interop made easy.' },
    ],
  },
  {
    title: 'Services',
    to: '/services',
    options: [
      { title: 'Engineering', to: 'consulting', desc: 'Hire world-class blockchain engineering teams.' },
      { title: 'Solutions', to: 'research', desc: 'Hire research and software designers.' },
      { title: 'Audits', to: '/services', desc: 'Request a smart contract audit.' },
    ],
  },
  {
    title: 'Company',
    to: '/about',
    options: [
      { title: 'About us', to: '/about', desc: 'Company history and values' },
      { title: 'Events', to: 'brand', desc: 'Meet us in-person or virtually.' },
      { title: 'Media', to: 'press', desc: 'Resources and Press.' },
      { title: 'Careers', to: 'careers', desc: 'Work on the frontier with friendly people.' },
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
        <motion.div className='navbar--left' variants={navbarVariants}>
          <span className='brand-container'>
            <img src='/logo192.png' alt=""/>
            <h4>ChainSafe</h4>
          </span>
          <motion.div animate={isOpen ? "open" : "closed"} initial="closed" className='navbar__container'>
            <motion.div className='bg' variants={bgVariants}></motion.div>
            <ul className='navbar__menu' >
              {menu.map(({title, to}) => (
                <NavLink to={to} className='menu-item' key={title}>{title}
                </NavLink> 
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
        {isOpen && (
          <motion.div className='submenu' variants={menuVariants}>
            {menu.map(({title, to, options}) => (
              <>
                <div className='submenu__right'>
                {to && (<NavLink to={to}><motion.h4 variants={menuItemVariants}>{title}</motion.h4></NavLink> )}
                  {options.map(({title, to, desc}) => (
                    <motion.li variants={menuItemVariants}>
                      <NavLink to={to}><p>{title}</p></NavLink>
                      { desc && <motion.h5 variants={opacityVariants}>{desc}</motion.h5> }
                    </motion.li>
                  ))}
                </div>
                <MenuToggle toggle={() => toggleOpen(!isOpen)} />
              </>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}
