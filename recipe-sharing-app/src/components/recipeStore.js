import { create } from "zustand";

const useRecipeStore = create(set => ({
    recipes: [
        { id: 1, title: 'Chicken Curry', description: 'Spicy and creamy' },
        { id: 2, title: 'Beef Stew', description: 'Hearty and savory' },
        { id: 3, title: 'Veggie Pasta', description: 'Light and healthy' },
    ],

    searchTerm:'',
    setSearchTerm: (term) =>set({searchTerm: term}),
    
    filteredRecipes: [],
    filterRecipes: () => set (state => ({filteredRecipes: 
        state.recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
    addRecipe: (newRecipe) =>
        set(state => ({
            recipes: [...state.recipes, newRecipe]
        })),

    setRecipes: (recipes) => set({ recipes }),

    deleteRecipe: (id) =>
        set(state => ({
            recipes: state.recipes.filter(recipe => recipe.id !== id)
        })),

    updateRecipe: (updatedRecipe) =>
        set(state => ({
            recipes: state.recipes.map(recipe =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            )
        })),
}));

export default useRecipeStore;
