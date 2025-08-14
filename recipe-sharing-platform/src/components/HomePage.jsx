 import { useState, useEffect} from "react";
import data from "../data.json"
function RecipeFinder(){
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
      setRecipes(data);
    }, []);

    return (
       <div className="h-auto  mt-4 mx-2 ">
             <h1 className="font-extrabold text-2xl mb-2 text-center text-orange-500 hover:text-orange-600
              transition duration-100 ">
              My Recipes</h1>
       {recipes.map(recipe => (
        <div key={recipe.id} className="mb-8  pt-4 pb-5 px-2 flex flex-row-reverse  gap-4 bg-gray-100 hover:scale-105 
        transition duration-300 ease-in-out shadow-lg   md:w-[80%] md:mx-auto lg:w-[40%] ">
          <div>
          <h2 className="font-medium text-orange-400  text-lg">{recipe.title}</h2>
          <p className="text-left lg:w-[70%] lg:h-auto">{recipe.summary}</p>
          <button type="submit" className="bg-orange-600 w-[32%] md:w-[21%]  rounded-2xl py-1 mt-2 hover:bg-orange-400 transition duration-500 ease-in-out text-white">Details</button>
          </div>
             <img 
             src={recipe.image} 
             alt="recipe" 
             className="w-[40%]  md:w-1/3 lg:pl-4  rounded-2xl"
             />
        </div>
       ))}
       </div>
    );
}
export default RecipeFinder; 