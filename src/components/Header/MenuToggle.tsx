import { motion } from "framer-motion";
import './index2.scss';


export const MenuToggle = ({toggle}:any) => {
  return (
  <button className='menuToggle' onClick={toggle} >
    <svg width="40" height="30" viewBox="0 0 25 25" fill="none" strokeWidth={2}>
      <motion.path strokeWidth={2} stroke="#8c8c8c" d="M 2 2.5 L 20 2.5"
      variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 18 2.5" }
        }}
      />
      <motion.path
        strokeWidth={2} stroke="#8c8c8c" 
        d="M 2 9.423 L 24 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path strokeWidth={2} stroke="#8c8c8c" d="M 2 16.346 L 24 16.346"
         variants={{
          closed: { d: "M 2 16.346 L 24 16.346" },
          open: { d: "M 3 2.5 L 18 16.346" }
        }}
      />
    </svg>
  </button>
  )
}
