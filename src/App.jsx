
import { lazy } from 'react'
import './App.css'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Gallery from "./components/Gallery"

const Home =lazy(()=>import('./components/Home'))
const Navbar =lazy(()=>import('./components/NavBar'))
const ServicesSection =lazy(()=>import('./components/Services'))
const AboutUs =lazy(()=>import('./components/Aboutus'))
const Testamonials =lazy(()=>import('./components/Testamonials'))

const Footer =lazy(()=>import('./components/Footer'))

function App() {

  return (
<>
<Navbar/>
<Home/>
<ServicesSection/>
<AboutUs/>
<Testamonials/>
<Contact/>
<FAQ/>
<Footer/>
</>      
  )
}

export default App
