import React, { useState, useEffect } from 'react';
import './index.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './mobilenav.scss';
import { IViewportSize, useViewportSize } from './use-viewport-size';


const sidebar = {
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
      delay: 0.25,
      type: "spring",
      stiffness: 300,
      restDelta: 5,
      damping: 40,
    }
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const staggerSelf = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 40, velocity: 50}
    }
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 40, velocity: 50 }
    }
  }
};

export interface NavLink {
  id?: number;
  name: string;
  linkUrl: string;
  description?: string;
}


const navlinks: NavLink[] = [
  {
    id: 1,
    name: "Public Goods",
    linkUrl: "https://web3js.readthedocs.io/en/v1.5.2/",
    description: "velit esse cillum dolore eu fugiat nulla pariatur."

  },
  {
    id: 3,
    name: "Products",
    linkUrl: "https://discord.com/invite/xSAwrnCWcg",
    description: "quis nostrum exercitationem ullam corporis suscipi."
  },
  {
    id: 4,
    name: "Services",
    linkUrl: "https://medium.com/chainsafe-systems",
    description: "Quis autem vel eum iure reprehenderit"
  },
  {
    id: 5,
    name: "Company",
    linkUrl: "https://github.com/chainsafe/web3.js",
    description: "expound the actual teachings of the great explorer of the truth",
  },
  {
    id: 5,
    name: "Community",
    linkUrl: "https://github.com/chainsafe/web3.js",
    description: "expound the actual teachings of the great explorer of the truth",
  },
]


export const FullHeader = () => {

  const [isOpen, toggleOpen] = useState(false);

  const [viewportSize, setViewportSize] = useState<IViewportSize>({
    width: undefined,
    height: undefined
  })

  const { width, height} = useViewportSize();

  useEffect(() => {
    setViewportSize({ width, height });
  }, [ width, height ]);

  return (
    <nav className='fullheader'>
      <div className='brand'>
        <img src="/logo192.png" alt="" />
        <h4>ChainSafe</h4>
      </div>
      {(viewportSize.width && viewportSize.width > 930) && (
        <ul className='fullheader--menu' >
          {navlinks.map(({name, linkUrl}) => (
            <NavLink to={linkUrl} className='menu-item' key={name}>{name}
            </NavLink> 
          ))}
        </ul>
      )}
      {(viewportSize.width && viewportSize.width < 930) && (<motion.nav
        initial={false}
        className='mobile-menu'
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className='background' variants={sidebar} />
          <motion.ul 
            variants={variants}
            className='navMenu'>
          {navlinks.map(i => (
            <motion.li
              className={'navlink'}
              variants={staggerSelf}
              whileHover={{ x: -8}}
              whileTap={{ scale: 0.93 }}
            >
              <a target="__blank" rel="noopener noreferrer" href={i.linkUrl} className='noUnderline'>{i.name}</a>
              </motion.li>
          ))}
        </motion.ul>
        <button className='button' onClick={() => toggleOpen(!isOpen)}>
          <svg width="26" height="26" viewBox="0 0 27 22" fill="none" strokeWidth={1.5}>
            <motion.path strokeWidth={1.5} stroke="#000" d="M 2 2.5 L 24 2.5"
            variants={{
                closed: { d: "M 2 2.5 L 24 2.5" },
                open: { d: "M 3 16.5 L 22 1" }
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
                closed: { d: "M 2 16.346 L 24 16.346" },
                open: { d: "M 3 1 L 22 16.346" }
              }}
            />
          </svg>
        </button>
      </motion.nav>)}
    </nav>
  )
}


