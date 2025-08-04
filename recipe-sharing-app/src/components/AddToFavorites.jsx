import useRecipeStore from "./recipeStore";
import { useState } from "react";

const AddToFavorites = ({ recipe }) => {
 const favorites = useRecipeStore(state => state.favorites);
 const addFavorites = useRecipeStore(state => state.addFavorites);
 const {id, title} = recipe;
 const[message, setMessage] = useState('');

 const isfavorite = favorites.includes(id);

 const handleFavorite = () => {
        addFavorites(id);
        const action = isfavorite ? 'removed from' : 'added to' ;
        setMessage(`"${title}" ${action} favorites`);

        setTimeout(() => setMessage(''),2000);
 };

    return(
        <div>
            <button onClick={handleFavorite}>
                {isfavorite ? 'unfavourite' : 'favorite'}
            </button>
            
            {message && <p>{message}</p>}
        </div>
    );
};
export default AddToFavorites;