import React, { useState, useEffect } from 'react';
import './index.scss';
import { motion, useViewportScroll } from 'framer-motion';
import { navbarVariants, bgVariants, menuVariants, opacityVariants, menuItemVariants } from './animationVariants';
import { NavLink } from 'react-router-dom';
import { MenuToggle } from '../Header/MenuToggle';
import { MobileNav } from './MobileNav';

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
      { title: 'About', to: '/about', desc: 'Company history and values' },
      { title: 'Events', to: 'brand', desc: 'Meet us in-person or virtually.' },
      { title: 'Media', to: 'press', desc: 'Resources and Press.' },
      { title: 'Careers', to: 'careers', desc: 'Work on the frontier with friendly people.' },
    ],
  },
];


type Props = {}

export const ClassicHeader = (props: Props) => {

  const { scrollY } = useViewportScroll();

  const [hidden, setHidden] = useState(false);
  const [isOpen, toggleOpen] = useState(false);

  const update = () => {
    if (scrollY?.get() < scrollY.getPrevious() && scrollY?.get() < 200) {
      setHidden(false);
    } else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }
  
  useEffect(() => {
    return scrollY.onChange(() => update());
  })

  return (
    <nav className='nav'>
      <div className='brand'>
        <img src="/logo192.png" alt="" />
        <h4>Sygma</h4>
      </div>
      <div className='menu-toggle'>
        <button className='button' onClick={() => toggleOpen(!isOpen)}>
          <svg width="26" height="26" viewBox="0 0 27 22" fill="none" strokeWidth={1.5}>
            <motion.path strokeWidth={1.5} stroke="#000" d="M 2 2.5 L 24 2.5"
            variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" }
              }}
            />
            <motion.path
              strokeWidth={1.5} stroke="#000" 
              d="M 2 9.423 L 24 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path strokeWidth={1.5} stroke="#000" d="M 2 16.346 L 24 16.346"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" }
              }}
            />
          </svg>
        </button>
      </div>

    </nav>
  )
}


