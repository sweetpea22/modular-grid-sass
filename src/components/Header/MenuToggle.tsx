import { motion } from "framer-motion";
import './index2.scss';


export const MenuToggle = ({toggle}:any) => {
  return (
  <button className='menuToggle' onClick={toggle} >
    <svg width="40" height="40" viewBox="0 0 30 30" fill="none" strokeWidth={2}>
      <motion.path strokeWidth={2} stroke="#5e5e5e" d="M 2 2.5 L 30 2.5"
      variants={{
          closed: { d: "M 2 2.5 L 30 2.5" },
          open: { d: "M 3 16.5 L 30 2.5" }
        }}
      />
      <motion.path
        strokeWidth={2} stroke="#5e5e5e" 
        d="M 2 9.423 L 30 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path strokeWidth={2} stroke="#5e5e5e" d="M 2 16.346 L 30 16.346"
         variants={{
          closed: { d: "M 2 16.346 L 30 16.346" },
          open: { d: "M 3 2.5 L 30 16.346" }
        }}
      />
    </svg>
  </button>
  )
}
