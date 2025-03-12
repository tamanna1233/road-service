
import { lazy ,Suspense} from 'react'
import './App.css'
import Loadinganimation from './components/Loadinganimation'
import { Helmet } from 'react-helmet'
const FAQ =lazy(()=>import('./components/FAQ')) 
const Contact =lazy(()=>import('./components/Contact') )
const  Gallery =lazy(()=>import("./components/Gallery")) 

const Home =lazy(()=>import('./components/Home'))
const Navbar =lazy(()=>import('./components/NavBar'))
const ServicesSection =lazy(()=>import('./components/Services'))
const AboutUs =lazy(()=>import('./components/Aboutus'))
const Testamonials =lazy(()=>import('./components/Testamonials'))

const Footer =lazy(()=>import('./components/Footer'))

function App() {

  return (
    <>
     {/* Helmet is used to define the document head metadata */}
     <Helmet>
     <title>Logistics Company - Reliable & Fast Services</title>
     <meta name="description" content="We provide the best logistics services with reliability and efficiency." />
     <meta name="keywords" content="logistics, truck repair, truck service, truck, transport, delivery, shipping" />
     <meta name="author" content="Truck and trailer repair" />
   </Helmet>

<Suspense fallback={<Loadinganimation/>}>
<Navbar/>
<Home/>
<ServicesSection/>
<AboutUs/>
<Testamonials/>
<Contact/>
<FAQ/>
<Footer/>
</Suspense>   
</> 
  )
}

export default App
