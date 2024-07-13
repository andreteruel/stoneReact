import React from 'react';
import { render, fireEvent, waitFor  } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import IconCart from '@/components/IconCart';
import { useCartStore } from '@/src/store/cartStore';

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
  }));


describe('IconCart', () => {
    beforeEach(() => {
        const cart = [{ 
            id: 1, 
            title: 'Product 1', 
            image: 'http: //i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
         }];
        useCartStore.setState({ cart });
      });
    it('renders cart icon with item count', async () => {
        const { getByText } = render(<IconCart />);
        await waitFor(() => expect(getByText('1')).toBeTruthy());
    });
    
    it('navigates to cart screen on press', async () => {
        const navigate = jest.fn();
        (useNavigation as jest.Mock).mockReturnValue({ navigate });
    
        const { getByTestId } = render(<IconCart />);
        const button = getByTestId('cart-icon-button');
        fireEvent.press(button);
    
        await waitFor(() => expect(navigate).toHaveBeenCalledWith('Cart/index'));
    });
});