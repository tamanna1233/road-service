import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { lazy ,Suspense} from 'react'
import LoadingAnimation from './components/Loadinganimation.jsx'
import Mission from './pages/Ourmission.jsx'
import WhyChooseUs from './pages/Whyus.jsx'
import ServicesPage from './pages/ServicePage.jsx'
const  BlogList =lazy(()=>import('./components/Blog.jsx')) 
const BlogDetails= lazy(()=>import('./components/BlogDetails.jsx')) 
const Homepage = lazy(() => import('./pages/Homepage.jsx'))
const ServicesSection = lazy(() => import('./components/Services.jsx'))
const AboutUs = lazy(() => import('./components/Aboutus.jsx'))
const Testimonials = lazy(() => import('./components/Testamonials.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const router=createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' element={<Suspense fallback={<LoadingAnimation/>}><App/></Suspense>}>
    <Route index element={<Homepage/>}/>
    {/* <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/services/:id' element={<ServicesPage/>}/> */}

    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/testimonial' element={<Testimonials/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blogs' element={<BlogList/>}/>
    <Route path="/blog/:slug" element={<BlogDetails />} />

    </Route>
  
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
