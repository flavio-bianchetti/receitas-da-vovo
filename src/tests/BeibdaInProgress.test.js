import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndProvider from '../renderWithRouterAndProvider';

beforeEach(() => {
  renderWithRouterAndProvider(<App />, '/bebidas/15997/in-progress');
});

describe('Testa pagina de bebida in progress', () => {
  it('Testa se o header está na página', async () => {
    const header = await screen.findByTestId('page-title');
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe('Bebidas');
  });

  it('testa se a imagem da Bebida está presente na página.', async () => {
    const imgGG = await screen.findByTestId('recipe-photo');
    expect(imgGG).toBeInTheDocument();
  });

  it('testa se o botão "Compartilhar" está presente na página.', async () => {
    const share = await screen.findByTestId('share-btn');
    expect(share).toBeInTheDocument();
    expect(share.textContent).toBe('Compartilhar');
  });

  it('testa se o botão de favoritar está presente na página.', async () => {
    const favorite = await screen.findByTestId('favorite-btn');
    expect(favorite).toBeInTheDocument();
  });

  it(`Testa se checkboxes do progresso da receita 
  forem clicados o botão habilita`, async () => {
    const checkboxSteps = await screen.findAllByTestId(/ingredient-step/);
    const finalizeRecipeBtn = await screen.findByTestId('finish-recipe-btn');
    expect(finalizeRecipeBtn).toBeDisabled();

    Array.from(checkboxSteps).forEach((step) => {
      expect(step).toBeInTheDocument();
      userEvent.click(step);
    });
    expect(finalizeRecipeBtn).not.toBeDisabled();
    userEvent.click(finalizeRecipeBtn);
    const recipesDonePageTitle = await screen.findByText('Receitas Feitas');
    expect(recipesDonePageTitle).toBeInTheDocument();
  });
});