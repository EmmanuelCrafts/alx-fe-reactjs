import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  // Fix: Check if recommendations is defined and is an array
  if (!Array.isArray(recommendations) || recommendations.length === 0) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recommended Recipes</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id} className="mb-3">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
