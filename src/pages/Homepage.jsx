import {lazy} from 'react'
import IntroductionSection from '../components/Introsection'
const Home =lazy(()=>import('../components/Home'))
const ServicesSection =lazy(()=>import('../components/Services'))
const AboutUs =lazy(()=>import('../components/Aboutus'))
const Homepage = () => {
  return (
    <div>
<Home/>
<IntroductionSection/>
<ServicesSection/>
    </div>
  )
}

export default Homepage
