import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router= createBrowserRouter([
    {
      path:"/Home",
      element:<Home/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
      
    </>
  )
 
   
};

export default App
