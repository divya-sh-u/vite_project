import React from 'react'
import Tilt from 'react-parallax-tilt';
type Props = {
  className?: string
}
const projects = [
  {title:'Web 3 NFT Dapp',description:'A decentralised application where anyone can mint nft',link:'Coming soon',tech:['React' , 'Web3' , 'Solidity' , 'IPFS' , 'Pinata' , 'Infura' , 'Etherscan' , 'Metamask' ]},
  {title:'Blockchain in typescript',description:'Blockchain in typescript understanding the real concept behind typescript',link:'Coming Soon',tech:['Typescript' , 'Nodejs']},
  {title:'React Admin Dashboard App',description:'A fully functional calendar, a kanban board, a WYSIWYG editor, and a color picker, as well as seven different charts!',link:'Coming Soon',tech:['Syncfusion','ReactHook' , 'ReactContext Api' ]},
  {title:'Tesla Clone in React Native',description:'Clone of tesla website with react native ',link:'Coming Soon',tech:['React Native' , 'Expo' , 'nativewind']}
]

const Projects = ({className}:Props) => {
  return (
    <div id='projects' className='mt-10 inset-0'>
    <div className='text-center items-center justify-center'>
    <h1 className="text-5xl font-bold text-center hover-underline-animation mb-10 cursor-pointer">Projects</h1>
    </div>
    <div className="flex flex-wrap justify-center">
      {projects.map(project => (
        <Tilt
          key={project.title}
          className="Tilt m-4 bg-gray-100 rounded-lg shadow-lg"
          style={{ height: 400, width: 300 }}>
          <div className="Tilt-inner p-4 flex flex-col justify-between">
            <div className="flex items-center justify-center h-48 bg-gray-300">
              {/* Replace this div with img element when you have actual images */}
              {/* <img src={project.link} alt={project.title} /> */}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className= "mt-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
    </div>
  );
};


export default Projects