import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom'


function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?')
    if (confirmDelete) {
      deleteRecipe(recipeId)
      navigate('/') // go back to homepage or list
    }
  };

  return (
    <button
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
