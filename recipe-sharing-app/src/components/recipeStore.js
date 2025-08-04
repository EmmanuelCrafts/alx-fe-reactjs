import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(persist(
  (set, get) => ({
    recipes: [
      { id: 1, title: 'Chicken Curry', description: 'Spicy and creamy' },
      { id: 2, title: 'Beef Stew', description: 'Hearty and savory' },
      { id: 3, title: 'Veggie Pasta', description: 'Light and healthy' },
      { id: 4, title: 'Grilled Salmon', description: 'Served with lemon butter sauce' },
      { id: 5, title: 'Tofu Stir Fry', description: 'Crunchy veggies with soy-glazed tofu' },
      { id: 6, title: 'Mushroom Risotto', description: 'Creamy and rich with Parmesan' },
      { id: 7, title: 'BBQ Chicken Pizza', description: 'Tangy sauce and mozzarella' },
      { id: 8, title: 'Lentil Soup', description: 'Comforting and high in protein' },
      { id: 9, title: 'Pancakes', description: 'Fluffy with maple syrup' },
      { id: 10, title: 'Avocado Toast', description: 'Topped with eggs and chili flakes' },
    ],

    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),

    filteredRecipes: [],
    filterRecipes: () =>
      set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      })),
    
    recommendations: [],
    generateRecommendations: () => set(state => {
      const recommended = state.recipes.filter(
         recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5);
      return {recommendations: recommended};
    }),

    favorites: [],
    addFavorites: (recipeId) =>
      set((state) => ({
        favorites: state.favorites.includes(recipeId)
          ? state.favorites.filter((id) => id !== recipeId)
          : [...state.favorites, recipeId],
      })),
    
     
    addRecipe: (newRecipe) =>
      set((state) => ({
        recipes: [...state.recipes, newRecipe],
      })),

    setRecipes: (recipes) => set({ recipes }),

    deleteRecipe: (id) =>
      set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      })),

    updateRecipe: (updatedRecipe) =>
      set((state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
      })),
  }),
  {
    name: "recipe-storage", // 👈 Key in localStorage
  }
));

export default useRecipeStore;
