import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecomendationCards from '../components/RecomendationCards';
import dishesRequest, { dishesById } from '../services/apiComidas';
import DishOrDrinkRecipeDetails from '../components/DishOrDrinkRecipeDetails';
import AppDeReceitasContext from '../context/AppDeReceitasContext';
import StartRecipeButton from '../components/StartRecipeButton';

function Comida() {
  const {
    currentDishOrDrink: currentMeal,
    setCurrentDishOrDrink: setCurrentMeal,
    ingredientsAndMeasures } = useContext(AppDeReceitasContext);
  console.log(currentMeal);

  const { id } = useParams();

  useEffect(() => {
    dishesRequest(dishesById(id))
      .then(({ meals }) => setCurrentMeal(meals.find((meal) => meal.idMeal === id)));
  }, []);

  return (

  // Comando velha guarda =)

    'idMeal' in currentMeal && (
      <div>
        <DishOrDrinkRecipeDetails
          dishOrDrink={ currentMeal }
          ingredientsAndMeasures={ ingredientsAndMeasures }
        />
        <video data-testid="video" controls>
          <source src={ currentMeal.strYoutube } />
          <track src="" kind="captions" srcLang="en" label="English" />
        </video>
        <RecomendationCards page="comidas" id={ currentMeal.idMeal } />
        <StartRecipeButton dishOrDrink={ currentMeal } meal="comida" />
      </div>
    )

  );
}

export default Comida;
