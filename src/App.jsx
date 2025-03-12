
import { lazy ,Suspense} from 'react'
import './App.css'
import Loadinganimation from './components/Loadinganimation'
const FAQ =lazy(()=>import('./components/FAQ')) 
const Contact =lazy(()=>import('./components/Contact') )
const Home =lazy(()=>import('./components/Home'))
const Navbar =lazy(()=>import('./components/NavBar'))
const ServicesSection =lazy(()=>import('./components/Services'))
const AboutUs =lazy(()=>import('./components/Aboutus'))
const Testamonials =lazy(()=>import('./components/Testamonials'))

const Footer =lazy(()=>import('./components/Footer'))

function App() {

  return (
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
  )
}

export default App
