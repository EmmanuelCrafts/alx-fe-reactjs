
import useRecipeStore from "./recipeStore";
const SearchBar = () => {
    const SetSearchTerm = useRecipeStore(state => state.setSearchTerm);
    return (
        <input 
           type="text"
           placeholder="search recipes..."
           onChange={(event)=> SetSearchTerm(event.target.value)}
        />
    );
};
export default SearchBar;