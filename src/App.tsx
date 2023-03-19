import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header, Container, Footer,Main ,Projects, About, Skills, Contact}  from './components/index'

 // a ,h1 , button , img , div , p , span , ul , li , ol  
function App() {
  

  return (
    
    <Container>
    
      {/* Header */}
        <Header/>
      {/* Main */}
      <Main/>
      {/* Projects */}
     <Projects />
      {/* About */}
     <About />
        {/* Skills */}
      <Skills />
      {/* Contact Me   */}
      <Contact />
      {/* Footer */}
      <Footer />
      {/* <Footer/> */}
    </Container>
  )
}

export default App
