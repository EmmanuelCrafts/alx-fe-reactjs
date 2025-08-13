import { useState, useEffect} from "react";
import data from "../data.json"
function RecipeFinder(){
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
      setRecipes(data);
    }, []);

    return (
       <div>
       {recipes.map(recipe => (
        <div key={recipe.id}>
             <h1>{recipe.title}</h1>
             <p>{recipe.summary}</p>
        </div>
       ))}
       </div>
    );
}
