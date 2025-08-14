import RecipeFinder from './components/HomePage'
import RecipeDetails from './components/RecipeDetails'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
         <Routes>
             <Route path='/' element={<RecipeFinder />} />
             <Route path='/recipes/:id' element={<RecipeDetails />} />
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
