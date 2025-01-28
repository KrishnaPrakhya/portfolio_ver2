import { animate,AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'
interface Props {}

function Stairs(props: Props) {
  const {} = props
  const starAnimation={
    initial:{
      top:"0%"
    },
    animate:{
      top:"100%"
    },
    exit:{
      top:["100%","0%"]
    }
  }

  const pathName=usePathname();
  console.log(pathName)
  const reverseIndex=(index:number)=>{
    const totalSteps=6;
    return totalSteps-index-1;
  }
  return (
    <>
 <motion.div initial={{opacity:1}} animate={{opacity:0,transition:{duration:0.5,ease:"circInOut",delay:0}}} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>

<h1 className="text-accent text-5xl">{pathName==="/"?"Home":pathName.substring(1).toLocaleUpperCase()}</h1>
  </motion.div>
    {
      [...Array(6)].map((_,index)=>{
        return (
            <motion.div className='h-full w-full bg-white relative' key={index} variants={starAnimation} initial="initial" animate="animate" exit="exit" 
            transition={{
              duration:0.4,ease:"easeInOut",delay:reverseIndex(index)*0.1
            }}
            />
        )
      })
    }
    </>
  )
}

export default Stairs
