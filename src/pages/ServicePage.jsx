import React from 'react'
import ServiceDetail from '../components/ServiceDetails'

const ServicePage = () => {
  return (
    <>
    <title>Our Services | Logistics, Fleet, Dispatch, Brokerage Services</title>
    <meta
          name="description"
          content="Walia Group of Companies provides complete logistics, transportation, dispatch, brokerage, safety, and maintenance services across North America. Trusted by fleets for over 7 years."
        />
        <meta
          name="keywords"
          content="Walia Group, logistics company, dispatch services, fleet maintenance, freight brokerage, warehousing, container drayage, intermodal logistics, 24/7 roadside assistance"
        />
        <meta name="author" content="Walia Group of Companies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="The Walia Group of Companies" />
        <meta
          property="og:description"
          content="Your trusted partner in complete logistics, transportation & fleet management across North America."
        />
    <ServiceDetail/>
    </>
  )
}

export default ServicePage
