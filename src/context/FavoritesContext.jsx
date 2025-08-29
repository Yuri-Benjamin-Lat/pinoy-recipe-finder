import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    console.log('Loading favorites from localStorage...');
    try {
      const savedFavorites = localStorage.getItem('recipeFavorites');
      console.log('Retrieved from localStorage:', savedFavorites);
      
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log('Parsed favorites:', parsedFavorites);
        setFavorites(parsedFavorites);
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('recipeFavorites');
      setFavorites([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      console.log('Saving favorites to localStorage:', favorites);
      try {
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
        console.log('Successfully saved to localStorage');
      } catch (error) {
        console.error('Error saving favorites to localStorage:', error);
      }
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (recipe) => {
    console.log('Adding to favorites:', recipe);
    setFavorites((prevFavorites) => {
      // Check if recipe already exists to avoid duplicates
      if (!prevFavorites.some(fav => fav.id === recipe.id)) {
        return [...prevFavorites, recipe];
      }
      console.log('Recipe already in favorites:', recipe.id);
      return prevFavorites;
    });
  };

  const removeFromFavorites = (recipeId) => {
    console.log('Removing from favorites:', recipeId);
    setFavorites((prevFavorites) => 
      prevFavorites.filter(recipe => recipe.id !== recipeId)
    );
  };

  const isFavorite = (recipeId) => {
    return favorites.some(recipe => recipe.id === recipeId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    isLoaded
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};