import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Favorite from '@/app/tabs/favorite';
import { useFavoriteStore } from '@/store/favoriteStore';

const favorites = [
  {
    id: 1,
    image: 'http://path/to/image1.jpg',
    title: 'Product 1',
    price: 10,
    amount: 1
  },
  {
    id: 2,
    image: 'http://path/to/image2.jpg',
    title: 'Product 2',
    price: 20,
    amount: 1
  },
];

describe('Favorite Screen', () => {
  const removeFromFavorites = jest.fn();
  beforeEach(() => {
    removeFromFavorites.mockReset();

    useFavoriteStore.setState({ 
      favorites,
      removeFromFavorites
    });
  });

  it('renders favorite products correctly', () => {
    const { getByText } = render(<Favorite />);

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
    expect(getByText('2 produtos adicionados:')).toBeTruthy();
  });

  it('calls removeFromFavorites when remove button is pressed', () => {
    const { getAllByTestId } = render(<Favorite />);
    const removeButtons = getAllByTestId('remove-button');

    fireEvent.press(removeButtons[0]);
    expect(useFavoriteStore.getState().removeFromFavorites).toHaveBeenCalledWith(favorites[0]);
  });

  it('shows message when no favorites', () => {
    useFavoriteStore.setState({ favorites: [] });

    const { getByText } = render(<Favorite />);
    expect(getByText('Nenhum produto adicionado como favorito.')).toBeTruthy();
  });
});
