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
    <>
         <div className="bg-gray-50  lg:mx-auto lg:w-[70%]">
            <h1 className="font-extrabold text-2xl mb-4 pt-4 text-center text-orange-500 hover:text-orange-600
              transition duration-100  lg:text-4xl lg:pt-8">{recipe?.title}</h1>
         <div className="mb-8">
            <img src={recipe?.image} className="w-[70%] md:w-[50%] ml-10 rounded-2xl" alt={recipe?.title} />
            <div className="mt-8 pt-4">
               <h2 className="font-semibold text-orange-500 md:text-xl
                text-lg ml-4 md:pl-8  lg:text-2xl">Ingredients</h2>
               <ul className="list-disc ml-4 pl-4 md:pl-8">
            {ingredients.map((ingredient, index) => (
               <li key={index} className="py-1 text-sm md:text-base  lg:text-lg">{ingredient}</li>
             ))}
               </ul>
            </div>
         </div>  
            <div className="pb-8">
            <h2 className="font-semibold text-orange-500 md:text-left md:pl-14 text-lg text-center md:text-xl lg:text-2xl">Instructions</h2>
                <ol className="list-decimal ml-4 px-4 md:w-[92%] md:mx-auto ">
                    {instructions.map((instruction, index) => (
                        <li key={index} className="py-2 text-sm md:text-base md:py-1 lg:text-lg">{instruction}</li>
                    ))}
                </ol>
            </div>
     </div>
    </>
  );
}
export default RecipeDetails;
