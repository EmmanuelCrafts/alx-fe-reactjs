
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
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
