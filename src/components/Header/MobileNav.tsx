import * as React from "react";
import { motion, useCycle } from "framer-motion";
import "./mobilenav.scss";

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
      delay: 0.5,
      type: "spring",
      stiffness: 50,
      restDelta: 9,
    }
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const staggerSelf = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -400}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -400 }
    }
  }
};

export interface NavLink {
  id?: number;
  name: string;
  linkUrl: string;
}


const navlinks: NavLink[] = [
  {
    id: 1,
    name: "Docs",
    linkUrl: "https://web3js.readthedocs.io/en/v1.5.2/"
  },
  {
    id: 3,
    name: "Join Discord",
    linkUrl: "https://discord.com/invite/xSAwrnCWcg"
  },
  {
    id: 4,
    name: "Blog",
    linkUrl: "https://medium.com/chainsafe-systems"
  },
  {
    id: 5,
    name: "GitHub",
    linkUrl: "https://github.com/chainsafe/web3.js"
  },
]


export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      initial={false}
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
      <button className='menuToggle' onClick={() => toggleOpen()} >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="blue" strokeWidth={2}>
          <motion.path strokeWidth={2} stroke="#fff" d="M 2 2.5 L 20 2.5"
          variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <motion.path
            strokeWidth={2} stroke="#fff" 
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.path strokeWidth={2} stroke="#fff" d="M 2 16.346 L 20 16.346"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
};