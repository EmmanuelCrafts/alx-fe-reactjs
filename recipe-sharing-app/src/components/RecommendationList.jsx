import useRecipeStore from "./recipeStore";

const RecommendationList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>

      <button onClick={generateRecommendations}>
        Get Recommendations
      </button>

      {recommendations.length === 0 ? (
        <p>No Recommendation yet</p>
      ) : (
        <ul>
          {recommendations.map(recipe => (
            <li key={recipe.id}>
              <h4>{recipe.title}</h4>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationList;
