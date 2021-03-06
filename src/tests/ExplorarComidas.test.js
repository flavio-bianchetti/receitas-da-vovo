import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndProvider from '../renderWithRouterAndProvider';

beforeEach(() => {
  renderWithRouterAndProvider(<App />, '/explorar/comidas');
});

describe('Testa o componente Explorar Comidas', () => {
  it('Testa o Botão Por Ingredientes', async () => {
    const buttonByIngredient = screen.getByTestId('explore-by-ingredient');
    expect(buttonByIngredient).toBeInTheDocument();
    expect(buttonByIngredient).toHaveTextContent('Por Ingredientes');
    expect(buttonByIngredient).not.toBeDisabled();

    fireEvent.click(buttonByIngredient);
    await screen.findByText('Explorar Ingredientes');
  });

  it('Testa o Botão Por Local de Origem', async () => {
    const buttonByOriginLocal = screen.getByTestId('explore-by-area');
    expect(buttonByOriginLocal).toBeInTheDocument();
    expect(buttonByOriginLocal).toHaveTextContent('Por Local de Origem');
    expect(buttonByOriginLocal).not.toBeDisabled();

    fireEvent.click(buttonByOriginLocal);
    await screen.findByText('Explorar Origem');
  });
  it('Testa o Botão Me Surpreenda!', async () => {
    const buttonSurpriseMe = screen.getByTestId('explore-surprise');
    expect(buttonSurpriseMe).toBeInTheDocument();
    expect(buttonSurpriseMe).toHaveTextContent('Me Surpreenda!');
    expect(buttonSurpriseMe).not.toBeDisabled();

    fireEvent.click(buttonSurpriseMe);
    await screen.findByText('Comidas');
  });
});
