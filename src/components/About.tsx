
import { motion } from 'framer-motion'
import devdesk from '../assets/eduNavy.svg'
import { useMediaQuery } from 'react-responsive'

type Props = {
  className?: string
}

const About = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div id='about'  className='h-screen max-w-6xl mt-10 pt-10 inset-0'>
      <div className='text-center items-center justify-center pb-3'>
      <div className=' text-5xl font-bold hover-underline-animation cursor-pointer'>About</div> 
      </div>
      {isDesktopOrLaptop &&
      <div className='mt-10 flex justify-between ml-20'>
      <motion.div className='snap-start snap-mandatory'
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1.5}}
      transition={{ duration: 1 }}>
      <img src={devdesk} alt='devdesk' width={350} height={500} />
      </motion.div>
      <div className='mt-20 items-center'>
      <div className='text-4xl font-bold pink-text-gradient mb-3  pb-2 hover-underline-animation cursor-pointer'>Education</div>
      <div className='text-2xl font-semibold blue-text-gradient'>B.Tech Computer Science and Engineering (DS & AI)</div>
      <div className='text-2xl font-semibold blue-text-gradient'>Indian Institute of Information Technology, Ranchi</div>
      <div className='text-2xl font-semibold blue-text-gradient'>2021-2025</div>
      <div className='text-2xl font-semibold blue-text-gradient'>CGPA: 8.5</div>
      <div className='text-2xl font-semibold blue-text-gradient'>12th: 82%</div>
      <div className='text-2xl font-semibold blue-text-gradient'>10th: 92%</div>
      </div>
      </div>}
      {isTabletOrMobile &&
      <div className='mt-20 items-center text-center'>
      <div className='text-4xl font-bold pink-text-gradient mb-3 hover-underline-animation cursor-pointer'>Education</div>
      <div className='text-2xl font-semibold blue-text-gradient'>B.Tech Computer Science and Engineering (DS & AI)</div>
      <div className='text-2xl font-semibold blue-text-gradient'>indian Institute of Information Technology, Ranchi</div>
      <div className='text-2xl font-semibold blue-text-gradient'>2021-2025</div>
      <div className='text-2xl font-semibold blue-text-gradient'>CGPA: 8.5</div>
      <div className='text-2xl font-semibold blue-text-gradient'>12th: 82%</div>
      <div className='text-2xl font-semibold blue-text-gradient'>10th: 92%</div>
      </div>}
    </div>
  )
}

export default About