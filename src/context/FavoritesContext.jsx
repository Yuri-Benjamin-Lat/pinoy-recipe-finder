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
      
      if (savedFavorites && savedFavorites !== 'undefined') {
        const parsedFavorites = JSON.parse(savedFavorites);
        
        // Validate that parsed data is an array
        if (Array.isArray(parsedFavorites)) {
          console.log('Parsed favorites:', parsedFavorites);
          setFavorites(parsedFavorites);
        } else {
          console.warn('Invalid favorites data format, resetting...');
          localStorage.removeItem('recipeFavorites');
          setFavorites([]);
        }
      } else {
        console.log('No saved favorites found or invalid data');
        setFavorites([]);
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('recipeFavorites');
      setFavorites([]);
    } finally {
      setIsLoaded(true);
      console.log('Favorites loading complete');
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      console.log('Saving favorites to localStorage:', favorites);
      try {
        // Only save if we have valid data
        if (Array.isArray(favorites)) {
          localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
          console.log('Successfully saved to localStorage');
        } else {
          console.warn('Invalid favorites data, not saving to localStorage');
        }
      } catch (error) {
        console.error('Error saving favorites to localStorage:', error);
        // Handle storage quota exceeded error
        if (error.name === 'QuotaExceededError') {
          console.error('LocalStorage quota exceeded!');
        }
      }
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (recipe) => {
    console.log('Adding to favorites:', recipe);
    
    // Validate recipe object has required properties
    if (!recipe || !recipe.id) {
      console.error('Invalid recipe object:', recipe);
      return;
    }
    
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

  const clearAllFavorites = () => {
    console.log('Clearing all favorites');
    setFavorites([]);
    localStorage.removeItem('recipeFavorites');
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    isLoaded,
    clearAllFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};