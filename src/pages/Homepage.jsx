import {lazy} from 'react'
const Home =lazy(()=>import('../components/Home'))
const ServicesSection =lazy(()=>import('../components/Services'))
const AboutUs =lazy(()=>import('../components/Aboutus'))
const Homepage = () => {
  return (
    <div>
<Home/>
<ServicesSection/>
<AboutUs/>      
    </div>
  )
}

export default Homepage
