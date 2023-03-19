import React from 'react'
import contact from '../assets/contactsNavy 1.svg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import {motion }from 'framer-motion'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


type Props = {
  className?: string
}

const Contact = ({className}:Props) => {
  const schema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().nonempty("Message is required"),
  });
type schema = z.infer<typeof schema>;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(schema),
});
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  return (
    <div id='contact'>
    <div className=' max-w-6xl mt-10 pt-10  '>
      <div className='text-center items-center justify-center pb-20'>
        <div className=' text-5xl font-bold hover-underline-animation cursor-pointer'>
          Contact
        </div>
        </div>
        
        {
        isDesktopOrLaptop &&
        <div className='justify-between flex-row grid grid-cols-4 mb-10 pb-10' >
        <div className='bg-body-background-accent flex-row col-span-2'>
        <form className='flex flex-col  text-center  mt-10 w-3/4  h-3/5 px-1 py-1 mx-auto mb-5 pb-10'
        onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col mt-4">
        <label className='pink-text-gradient texthead' htmlFor="name">Name</label>
        <input id="name" type="text" {...register("name")} className=" text-center border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:ring-indigo-300 dark:text-white dark:border-gray-600 dark:bg-gray-600"/>
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label className='pink-text-gradient texthead' htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} className=" text-center border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:ring-indigo-300 dark:text-white dark:border-gray-600 dark:bg-gray-600"/>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label className='pink-text-gradient texthead' htmlFor="message">Message</label>
        <textarea id="message" {...register("message")} rows={5} className="text-center border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:ring-indigo-300 dark:text-white resize-none dark:border-gray-600 dark:bg-gray-600"/>
{errors.message && 
<p>{errors.message.message }</p>}
</div><button className='text-2xl bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 text-center
rounded-lg mt-4 transition duration-300  ease-in-out'type='submit'>
          Submit
        </button>
      </form>
  </div>
        <div className='col-span-2 mx-auto mt-0 pt-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.1  }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={contact} alt='contact' className='object-cover mt-5' height={500} width={350}/>
        </motion.div>
        </div>
        </div>}
        {isTabletOrMobile &&
        <div className='  max-w-6xl mt-10 pt-10 pb-3  m-3'>
        <div className='bg-body-background-accent flex-row '>
        <form className='flex flex-col  text-center  mt-10 w-3/4  h-3/5 px-1 py-1 mx-auto pb-10'
        onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col mt-4">
        <label className='pink-text-gradient texthead' htmlFor="name">Name</label>
        <input id="name" type="text" {...register("name")} className="text-center border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:ring-indigo-300 dark:text-white dark:border-gray-600 dark:bg-gray-600"/>
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label className='pink-text-gradient texthead' htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} className="text-center border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:ring-indigo-300 dark:text-white dark:border-gray-600 dark:bg-gray-600"/>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label className='pink-text-gradient texthead' htmlFor="message">Message</label>
        <textarea id="message" {...register("message")} rows={5} className=" text-center border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:ring-indigo-300 dark:text-white resize-none dark:border-gray-500 dark:bg-gray-600"/>
{errors.message && 
<p>{errors.message.message }</p>}
</div><button className='text-2xl bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 text-center
rounded-lg mt-4 transition duration-300  ease-in-out'type='submit'>
          Submit
        </button>
      </form>
  </div>
  </div>
        }


</div>

    </div>
    
  )
}

export default Contact