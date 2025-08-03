import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
    const {id} = useParams();
    const recipe = useRecipeStore(state => state.recipe.find(recipe => recipe.id === Number(id)));
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
    );
};
export default RecipeDetails;