import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routers from './routes/Router';
import router from "./routes/Router";
import Footer from './utils/Footer';
import Navbar from './utils/Navbar';
import { useState } from 'react';
import { AppContext } from './context/AppContext';


export default function App() {

    const [lauga , setLauga] = useState('uzb')
    function laugaChange() {
        if (lauga == 'uzb') {
            setLauga('rus')
        } else {
            setLauga('uzb')
        }
    }

    return (
        <>
            <AppContext.Provider value={{ lauga , laugaChange}}>
                <Routers />
            </AppContext.Provider>
        </>
    )
}