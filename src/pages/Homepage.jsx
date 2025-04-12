import {lazy} from 'react'
import IntroductionSection from '../components/Introsection'
const Home =lazy(()=>import('../components/Home'))
const ServicesSection =lazy(()=>import('../components/Services'))
const AboutUs =lazy(()=>import('../components/Aboutus'))
const Homepage = () => {
  return (
    <div>
  <title>TWGC – North America’s Leading Smart Logistics Partner</title>
        <meta
          name="description"
          content="TWGC delivers 24/7 fleet safety, dispatch, DOT compliance & logistics—aiming to be North America's most trusted and efficient logistics partner."/>
          <meta
          name="keywords"
          content="TWGC, Walia Group, North America logistics, fleet safety, DOT compliance, dispatch services, freight brokerage, warehousing solutions, container drayage, intermodal logistics, 24/7 roadside assistance"
        />
        
        
        <Home/>
<IntroductionSection/>
<ServicesSection/>
    </div>
  )
}

export default Homepage
