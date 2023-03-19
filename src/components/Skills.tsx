import React from 'react'
import docker from '../techassets/docker-icon.svg'
import git from '../techassets/github-actions.svg'
import solidity from '../techassets/solidity.svg'
import sanity from '../techassets/sanity.svg'
import supabase from '../techassets/supabase.svg'
import typescript from '../techassets/typescript-icon.svg'
import go from '../techassets/go.svg'
import react from '../techassets/react.svg'
import next from '../techassets/nextjs-icon.svg'
import redwood from '../techassets/redwoodjs.svg'
import python from '../techassets/python.svg'
import node from '../techassets/nodejs.svg'
import postgres from '../techassets/postgresql.svg'
import mongodb from '../techassets/mongodb.svg'
import graphql from '../techassets/graphql.svg'
import hardhat from '../techassets/hardhat-icon.svg'
import ethereum from '../techassets/ethereum.svg'
import visualstudio from '../techassets/visual-studio-code.svg'
import figma from '../techassets/figma.svg'
import mongodb2 from '../techassets/mongodb-icon.svg'
type Props = {
  className?: string
}
const Skills = ({className}:Props) => {

  const Tech = [
    {
      name: 'Docker',
      image: docker,
      link: 'https://www.docker.com/',
      level: 3
    },
    {
      name: 'Github Actions',
      image: git,
      link: 'https://git-scm.com/',
      level: 3
    },
    {
      name: 'Solidity',
      image: solidity,
      link: 'https://docs.soliditylang.org/en/v0.8.9/',
      level: 3
    },
    {
      name: 'Sanity',
      image: sanity,
      link: 'https://www.sanity.io/',
      level: 3
    },
    {
      name: 'Supabase',
      image: supabase,
      link: 'https://supabase.io/',
      level: 3
    },
    {
      name: 'Typescript',
      image: typescript,
      link: 'https://www.typescriptlang.org/',
      level: 3
    },
    {
      name: 'Go',
      image: go,
      link: 'https://golang.org/',
      level: 3
    },
    {
      name: 'React',
      image: react,
      link: 'https://reactjs.org/',
      level: 3
    },
    {
      name: 'Next',
      image: next,
      link: 'https://nextjs.org/',
      level: 3
    },
    {
      name: 'Redwood',
      image: redwood,
      link: 'https://redwoodjs.com/',
      level: 3
    },
    {
      name: 'Python',
      image: python,
      link: 'https://www.python.org/',
      level: 3
    },
    {
      name: 'Node',
      image: node,
      link: 'https://nodejs.org/en/',
      level: 3
    },
    {
      name: 'Postgres',
      image: postgres,
      link: 'https://www.postgresql.org/',
      level: 3
    },
    {
      name: 'GraphQL',
      image: graphql,
      link: 'https://graphql.org/',
      level: 3
    },
    {
      name: 'Hardhat',
      image: hardhat,
      link: 'https://hardhat.org/',
      level: 3
    },
    {
      name: 'Ethereum',
      image: ethereum,
      link: 'https://ethereum.org/en/',
      level: 3
    },
    {
      name: 'Visual Studio Code',
      image: visualstudio,
      link: 'https://code.visualstudio.com/',
      level: 3
    },
    {
      name: 'Figma',
      image: figma,
      link: 'https://www.figma.com/',
      level: 3
    },
    {
      name: 'MongoDB',
      image: mongodb2,
      link: 'https://www.mongodb.com/',
      level: 3
    }
  ]
  return (
    <div id='skills' className=  'mt-20 '>
      <div className='text-center pb-20 mb-5'>
      <div className='hover-underline-animation cursor-pointer text-5xl font-bold'>
      Skills
      </div>
      </div>
      
      <div className='flex flex-wrap justify-center mt-10'>
      {Tech.map((pogo, i) => ( <div key={i} className='flex flex-row flex-wrap items-center justify-center m-5 mb-2 pb-2' > <div className='group 
      relative w-24 h-24 hover:scale-125 bg-contain cursor-pointer object-scale-down '><a href={pogo.link}><img src={pogo.image} alt={pogo.name}
      className='w-full h-full object-scale-down transform:scale--75 rounded-full' /> <div className="absolute top-0 left-0 w-full h-full bg-gray-800 
      opacity-0 group-hover:opacity-60 duration-300 flex justify-center items-center rounded-full"> <span className="text-white text-xl font-bold">
      {pogo.level}</span> </div></a> </div> </div> ))
      }   
      </div>
      </div>
  )
}

export default Skills