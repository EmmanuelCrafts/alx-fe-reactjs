
import './App.css'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
   <BrowserRouter>
    <Navbar />
     <Routes>
         <Route path='/' element = {<Home />} />
         <Route path='/about' element = {<About />} />
         <Route path='/contact' element = {<Contact />} />
         <Route path='/services' element = {<Services />} />

     </Routes>
   </BrowserRouter>
  )
}

export default App
