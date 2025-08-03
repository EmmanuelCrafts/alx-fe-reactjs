
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={
           <>
             <SearchBar />
             <RecipeList />
             <FavoritesList />
             <RecommendationsList />
           </>
        } />
       <Route path='/add' element={<AddRecipeForm />} />
       <Route path='/recipes/:id' element={<RecipeDetails />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
