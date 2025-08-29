import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Favorite from './Favorite';
import RecipeDetails from './components/Recipedetails';
import { FavoritesProvider } from './context/FavoritesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);