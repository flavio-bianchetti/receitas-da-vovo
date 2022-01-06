import React, { useState, useEffect } from 'react';

function StartRecipeButton({ dishOrDrink, meal, drink }) {
  const [recipe, setRecipe] = useState([]);
  const storage = localStorage;
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    storage.setItem('doneRecipe', '');
  }, []);

  const doneRecipe = [{
    id: dishOrDrink.idMeal || dishOrDrink.idDrink,
    type: meal || drink,
    area: dishOrDrink.strArea,
    category: dishOrDrink.strCategory,
    alcoholicOrNot: dishOrDrink.strAlcoholic,
    name: dishOrDrink.strMeal || dishOrDrink.strDrink,
    image: dishOrDrink.strMealThumb || dishOrDrink.strDrinkThumb,
    doneDate: today,
    tags: dishOrDrink.strTags,
  }];

  function handleClick() {
    setRecipe([...recipe, doneRecipe]);
    storage.setItem('doneRecipe', JSON.stringify(doneRecipe));
  }

  if (recipe.length === 0) {
    return (
      <div>
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => handleClick() }
        >
          Começar receita
        </button>
      </div>
    );
  }

  return (
    <div />
  );
}

export default StartRecipeButton;
