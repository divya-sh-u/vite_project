import React from 'react'

import { motion} from "framer-motion"
type Props = {
    children: React.PropsWithChildren 
}

const Container = ({children}:React.PropsWithChildren) => {
  
 const [show, setShow] = React.useState(true)
  return (
    <div>
     {/* {show && <div className='mx-auto max-w-3xl lg:max-w-6xl text-15xl justify-center items-center'  
     onClick={setShow(false)}>Hi</div>} */}
     { show && <div className='mt-36 w-screen items-center justify-center flex flex-col'
     onClick={()=>setShow(false)}
     ><motion.div className='flex 
     justify-center items-center text-9xl text-center'
    //  <motion.div className='h-screen w-full justify-center items-center text-9xl'
      initial={{ opacity: 0 ,y:-50 , x:0}}
      animate={{ opacity: 1 ,y:170 , }}
      transition={{ duration: 4}}
      // exit={{ opacity: 0 }}
      
      >Hi👋,</motion.div>
      <div className='px-4 py-4 mt-52 font-bold text-white text-center items-center justify-center text-4xl bg-gray-900
      rounded-3xl shadow-md cursor-pointer hover:bg-gray-500'
       >
        Deep dive into my portfolio
      </div></div>
    }
    { !show && <div className='mx-auto max-w-3xl lg:max-w-6xl' >{children}</div>}
    {/* <div className='mx-auto max-w-3xl lg:max-w-6xl' >{children}</div> */}
    </div>

  )
}




export default Container