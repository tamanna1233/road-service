import {lazy} from 'react'
import IntroductionSection from '../components/Introsection'
const Home =lazy(()=>import('../components/Home'))
const ServicesSection =lazy(()=>import('../components/Services'))
const AboutUs =lazy(()=>import('../components/Aboutus'))
const Homepage = () => {
  return (
    <div>
 <title>The Walia Group of Companies | Logistics, Fleet, Dispatch, Brokerage Services</title>
        <meta
          name="description"
          content="Walia Group of Companies provides complete logistics, transportation, dispatch, brokerage, safety, and maintenance services across North America. Trusted by fleets for over 7 years."
        />
        <meta
          name="keywords"
          content="Walia Group, logistics company, dispatch services, fleet maintenance, freight brokerage, warehousing, container drayage, intermodal logistics, 24/7 roadside assistance"
        />
        
        <Home/>
<IntroductionSection/>
<ServicesSection/>
    </div>
  )
}

export default Homepage
