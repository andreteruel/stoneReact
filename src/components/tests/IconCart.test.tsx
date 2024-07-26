import React from 'react';
import { render, fireEvent, waitFor  } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import IconCart from '@/components/IconCart';
import { useCartStore } from '@/store/cartStore';

jest.mock('expo-router', () => ({
    useRouter: jest.fn(() => ({
        push: jest.fn(),
    })),
}));

describe('IconCart', () => {
    beforeEach(() => {
        const cart = [{ 
            id: 1, 
            title: 'Product 1', 
            image: 'http: //i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
            price: 10,
            amount: 1
         }];
        useCartStore.setState({ cart });
      });
    it('renders cart icon with item count', async () => {
        const { getByText } = render(<IconCart />);
        await waitFor(() => expect(getByText('1')).toBeTruthy());
    });
    
    it('navigates to cart screen on press', async () => {
        const push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });
    
        const { getByTestId } = render(<IconCart />);
        const button = getByTestId('cart-icon-button');
        fireEvent.press(button);
    
        await waitFor(() => expect(push).toHaveBeenCalledWith('/cart'));
    });
});