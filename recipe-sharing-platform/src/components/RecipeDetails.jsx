import { useEffect , useState} from "react"
import recipes from "../data.json"
import { useParams } from "react-router-dom"

 function RecipeDetails() {
    const[recipe, setRecipes] = useState(null);
    const{ id } = useParams();
    const ingredients = recipe?.ingredients || [];
    const instructions = recipe?.instructions || [];

  useEffect(() => {
     const findRecipe = recipes.find((recipe => recipe.id === Number(id)));
     setRecipes(findRecipe);
  },[id]);

  return(
     <div>
            <h1 className="">{recipe?.title}</h1>
            <img src={recipe?.image} alt={recipe?.title} />
            <div>
               <h2>Ingredients</h2>
               <ul>
            {ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient}</li>
             ))}
            </ul>
            </div>
            
            <div>
                <ol>
                    {instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
     </div>
  );
}
export default RecipeDetails;
