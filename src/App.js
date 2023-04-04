import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routers from './routes/Router';
import { useState , useEffect} from 'react';
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

    useEffect(() => {
        const storedLauga = localStorage.getItem("lauga");
        if (storedLauga) {
          setLauga(storedLauga);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("lauga", lauga);
      }, [lauga]);
    

    return (
        <>
            <AppContext.Provider value={{ lauga , laugaChange}}>
                <Routers />
            </AppContext.Provider>
        </>
    )
}