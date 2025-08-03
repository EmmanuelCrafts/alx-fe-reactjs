import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useEffect } from "react";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    useEffect(() => {
        filterRecipes();
          },[searchTerm, filterRecipes]);

    return (
        <div>
  {filteredRecipes.length === 0 ? (
    <p>No recipes found.</p>
  ) : (
    filteredRecipes.map(recipe => (
      <div key={recipe.id}>
        <Link to={`recipe/${recipe.id}`}>
          <h3>{recipe.title}</h3>
        </Link>
        <p>{recipe.description}</p>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    ))
  )}
</div>

    );
};
export default RecipeList;