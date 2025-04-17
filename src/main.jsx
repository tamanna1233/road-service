import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { lazy ,Suspense} from 'react'
import LoadingAnimation from './components/Loadinganimation.jsx'
import ThankYou from './components/Thankyou.jsx'

const  BlogList =lazy(()=>import('./pages/Blogspage.jsx')) 
const BlogDetails= lazy(()=>import('./components/BlogDetails.jsx')) 
const Homepage = lazy(() => import('./pages/Homepage.jsx'))
const ServicesSection = lazy(() => import('./components/Services.jsx'))
const AboutUsPage = lazy(() => import('./pages/AboutPage.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonalspage.jsx'))
const Contact = lazy(() => import('./pages/Contactpage.jsx'))
const Servicespage =lazy(()=>import("./pages/ServicePage.jsx"))
const Notfound = lazy(() => import('./components/Notfound.jsx'))
const router=createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' element={<Suspense fallback={<LoadingAnimation/>}><App/></Suspense>} errorElement={<Notfound/>}>
    <Route index element={<Homepage/>}/>
   <Route path='/services' element={<ServicesSection/>}/>
    {/*  <Route path='/services/:id' element={<ServicesPage/>}/> */}

    <Route path='/about-us' element={ <Suspense fallback={<LoadingAnimation />}>
    <AboutUsPage />
  </Suspense>}/>
    <Route path='/testimonial' element={ <Suspense fallback={<LoadingAnimation />}>
    <Testimonials />
  </Suspense>}/>
    <Route path='/contact' element={ <Suspense fallback={<LoadingAnimation />}>
    <Contact />
  </Suspense>}/>
    <Route path='/blogs' element={
  <Suspense fallback={<LoadingAnimation />}>
    <BlogList />
  </Suspense>
} />
    <Route path='/services/:serviceId' element={<Servicespage/>}/>
    <Route path="/blog/:slug" element={<BlogDetails />} />

    <Route path='/thankyou' element={<ThankYou/>}/>
    </Route>
  
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
