import React from 'react'
import About from '../components/Aboutus'
import WhyUs from '../components/Whyus'
import Founders from '../components/Founder'
import LeadershipValues from '../components/LeaderShip'

const AboutPage = () => {
  return (
    <div>
      <title>About us | Logistics, Fleet, Dispatch, Brokerage Services</title>
       <meta
          name="description"
          content="Learn more about The Walia Group of Companies, our expert founders Rahul Walia & Karan Dhatwalia, and our values in fleet safety, dispatch, logistics, and maintenance services."
        />
        <meta
          name="keywords"
          content="About Walia Group, Rahul Walia, Karan Dhatwalia, logistics experts, fleet safety, dispatch team, leadership values"
        />
        <meta name="author" content="Walia Group of Companies" />
        <meta property="og:title" content="About Us | The Walia Group of Companies" />
        <meta
          property="og:description"
          content="Discover the story behind Walia Group of Companies, our leadership, and our commitment to excellence in logistics, dispatch, and fleet operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://road-service-omega.vercel.app/about" />
        <meta property="og:image" content="https://road-service-omega.vercel.app/about-us-banner.jpg" />
        <link rel="canonical" href="https://road-service-omega.vercel.app/about" />
        <About/>
        <WhyUs/>
        <Founders/>
        <LeadershipValues/>
      
    </div>
  )
}

export default AboutPage
