import {lazy} from 'react'
const FAQ =lazy(()=>import('../components/FAQ')) 
const Contact =lazy(()=>import('../components/Contact') )
const Home =lazy(()=>import('../components/Home'))
const ServicesSection =lazy(()=>import('../components/Services'))
const AboutUs =lazy(()=>import('../components/Aboutus'))
const Testamonials =lazy(()=>import('../components/Testamonials'))
const Homepage = () => {
  return (
    <div>
<Home/>
<ServicesSection/>
<AboutUs/>
<Testamonials/>
<FAQ/>
<Contact/>
      
    </div>
  )
}

export default Homepage
