import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Cart from '@/app/cart';
import { useCartStore } from '@/store/cartStore';

const cart = [
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
    amount: 2
  },
];

describe('Cart Screen', () => {
  const removeFromCart = jest.fn();
  const attAmount = jest.fn();

  beforeEach(() => {
    removeFromCart.mockReset();
    attAmount.mockReset();

    useCartStore.setState({ 
      cart,
      removeFromCart,
      attAmount 
    });
  });
  it('renders cart products correctly', () => {
    const { getByText } = render(<Cart />);

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
    expect(getByText('2 produtos adicionados:')).toBeTruthy();
    expect(getByText('R$ 10,00')).toBeTruthy();
    expect(getByText('R$ 40,00')).toBeTruthy();
  });

  it('calls removeFromCart when remove button is pressed', () => {
    const { getAllByTestId } = render(<Cart />);
    const removeButtons = getAllByTestId('remove-button');

    fireEvent.press(removeButtons[0]);
    expect(removeFromCart).toHaveBeenCalledWith(cart[0]);
  });

  it('calls attAmount when amount buttons are pressed', () => {
    const { getAllByTestId } = render(<Cart />);
    const incrementButtons = getAllByTestId('increment-button');
    const decrementButtons = getAllByTestId('decrement-button');

    fireEvent.press(incrementButtons[0]);
    expect(attAmount).toHaveBeenCalledWith({ ...cart[0], amount: 2 });

    fireEvent.press(decrementButtons[1]);
    expect(attAmount).toHaveBeenCalledWith({ ...cart[1], amount: 1 });
  });

  it('shows message when cart is empty', () => {
    useCartStore.setState({ cart: [] });

    const { getByText } = render(<Cart />);
    expect(getByText('O carrinho está vazio.')).toBeTruthy();
  });
});
