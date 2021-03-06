import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { drinksById } from '../services/apiDrinks';
import dishesOrDrinksRequest from '../services/apiSearchDrinksNFoods';
import RecomendationCards from '../components/RecomendationCards';
import DishOrDrinkRecipeDetails from '../components/DishOrDrinkRecipeDetails';
import AppDeReceitasContext from '../context/AppDeReceitasContext';
import StartRecipeButton from '../components/StartRecipeButton';
import HeaderHeader from '../components/HeaderHeader';

function Bebida() {
  const {
    currentDishOrDrink: currentDrink,
    setCurrentDishOrDrink: setCurrentDrink,
    ingredientsAndMeasures } = useContext(AppDeReceitasContext);

  const { id } = useParams();
  useEffect(() => {
    let isAPiSubscribed = true;
    dishesOrDrinksRequest(drinksById(id))
      .then(({ drinks }) => isAPiSubscribed && setCurrentDrink(drinks
        .find((drink) => drink.idDrink === id)));

    return () => {
      isAPiSubscribed = false;
    };
  }, []);

  return (
    Object.keys(currentDrink).length > 0 && (
      <div className="pages-background">
        <div className="container">
          <HeaderHeader title="Bebidas" />
          <section className="food-details-container">
            <section className="food-details">
              <DishOrDrinkRecipeDetails
                dishOrDrink={ currentDrink }
                ingredientsAndMeasures={ ingredientsAndMeasures }
              />
              <RecomendationCards page="bebidas" />
              <StartRecipeButton
                dishOrDrink={ currentDrink }
                page="bebidas"
                dishOrDrinkId={ currentDrink.idDrink }
              />
            </section>
          </section>
        </div>
      </div>
    )
  );
}

export default Bebida;
