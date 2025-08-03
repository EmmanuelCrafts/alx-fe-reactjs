// components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../store/useRecipeStore'

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?')
    if (confirmDelete) {
      deleteRecipe(recipeId)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
    >
      Delete
    </button>
  )
}

export default DeleteRecipeButton
