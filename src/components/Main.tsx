
import { useMediaQuery } from 'react-responsive'
import { Typewriter } from 'react-simple-typewriter'
import developer from '../assets/developer.svg' 
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
type Props = {
    className?: string
}
const sites = [
    { url: "https://twitter.com/divyanshu", name: "Twitter" },
    { url: "https://facebook.com/divyanshu", name: "Facebook" },
    { url: "https://instagram.com/divyanshu", name: "Instagram" },
    { url: "https://linkedin.com/in/divyanshu", name: "LinkedIn" },
    { url: "https://github.com/divyanshu", name: "GitHub" }
  ];
const Main = (props: Props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    
    <div className='h-screen'>    
        {isDesktopOrLaptop &&
        <section className='grid grid-cols-12 justify-center items-center'>
        <div className='grid grid-col col-span-6 font-bold text-3xl '>
            <Typewriter words={['Hello,👋 ' ]} loop={5} cursor={false} />
            <div className='texthead'>I am</div>
            <div className='texthead'>Divyanshu Vashishth</div>
            <div className='flex flex-row'>
            <div className='texthead '>
                Software developer</div> <div className='bg-transparent'>🧑‍💻</div><div className='texthead'>, Web-3 enthusiast</div>
                </div>
            <div className='h-3 mt-5 space-x-2 justify-center'>
            {sites.map((site, i) => (
                <SocialIcon key={i} url={site.url} className='flex flex-row text-sm bg-transparent' bgColor='black' fgColor='gray'/>
            ))}</div>
            </div>
            
        <motion.div className='grid grid-col col-span-5 object-contain pl-20 mt-20 mr-0'
        initial={{ opacity: 0, scale: 0.5 , y: -100}}
        animate={{ opacity: 1, scale: 1 ,y: 0}}
        transition={{ duration: 1.5 }}
        >
            <img src={developer} alt='developer' width={350} height={500} />   
        </motion.div></section>
        }
        {isTabletOrMobile &&
        <div className=' font-bold h-screen pt-20 text-3xl mx-auto w-full mt-20 ml-5'>
        <Typewriter words={['Hello,👋' ]} loop={5} cursor />
        <div className='texthead'>I am</div>
        <div className='texthead'>Divyanshu Vashishth</div>
        <div className='flex flex-row'>
            <div className='texthead '>
                Software developer</div> <div className='bg-transparent'>🧑‍💻</div><div className='texthead'>, Web-3 enthusiast</div>
                </div>
        <div className='h-3 mt-5 space-x-2 justify-center'>
        {sites.map((site, i) => (
                <SocialIcon key={i} url={site.url} className='flex flex-row text-sm bg-transparent' bgColor='black' fgColor='gray'/>
            ))}</div>
        </div>
        }
        



    </div>
  )
}

export default Main