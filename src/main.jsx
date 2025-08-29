import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Favorite from './Favorite';
import RecipeDetails from './components/Recipedetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);