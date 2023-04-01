import { createBrowserRouter, RouterProvider, redirect, BrowserRouter, Routes, Route } from 'react-router-dom'
import Found from '../pages/404'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Faq from '../pages/faqs/Faq'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Service'

// const router = createBrowserRouter([
//     {
//         path: '*' ,
//         element: <Found/>  
//     } ,
//     {
//         path: '/' ,
//         element: <Home/>
//     },
//     {
//         path:'About' ,
//         element: <About/>
//     },
//     {
//         path: 'services' ,
//         element: <Service/>
//     },
//     {
//         path: 'portfolio' ,
//         element: <Portfolio/>
//     },
//     {
//         path: 'faq' ,
//         element: <Faq/>
//     },
//     {
//         path: 'contact' ,
//         element: <Contact/>
//     }
// ])
function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Found/>} path="*" />
                <Route element={<Home />} path="/" />
                <Route element={<About/>} path="about" />
                <Route element={<Service/>} path="services" />
                <Route element={<Portfolio/> } path="portfolio" />
                <Route element={<Faq/>} path="faq" />
                <Route element={<Contact/>} path="contact" />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers