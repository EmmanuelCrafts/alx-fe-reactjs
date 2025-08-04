
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import RecommendationList from './components/RecommendationList'

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={
           <>
             <SearchBar />
             <RecipeList />
             <RecommendationList />
           </>
        } />
       <Route path='/add' element={<AddRecipeForm />} />
       <Route path='/recipes/:id' element={<RecipeDetails />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
