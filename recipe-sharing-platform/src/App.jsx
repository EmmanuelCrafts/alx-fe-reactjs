import RecipeFinder from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
         <Routes>
             <Route path='/' element={<RecipeFinder />} />
             <Route path='/recipes/:id' element={<RecipeDetail />} />
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
