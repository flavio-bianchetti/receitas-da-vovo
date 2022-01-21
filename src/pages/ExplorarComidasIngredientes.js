import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientsExplorer from '../components/IngredientsExplorer';
import AppDeReceitasContext from '../context/AppDeReceitasContext';

function ExplorarComidasIngredientes() {
  const { listMealsIngredients } = useContext(AppDeReceitasContext);
  const imageUrl = 'https://www.themealdb.com/images/ingredients/';
  return (
    <div className="pages-background">
      <div className="container">
        <Header title="Explorar Ingredientes" />
        <IngredientsExplorer
          ingredientsList={ listMealsIngredients }
          imageUrl={ imageUrl }
          path="/comidas"
        />
        <Footer />
      </div>
    </div>
  );
}

export default ExplorarComidasIngredientes;
