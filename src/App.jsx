import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
   <>
     <Navbar>
     </Navbar>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero></Hero>
      </div>
      <Feature></Feature>
      <Workflow></Workflow>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <div className='px-4'><Footer ></Footer></div>
      
   </>
  )
}

export default App
