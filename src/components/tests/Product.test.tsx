import React from 'react';
import { render } from '@testing-library/react-native';
import Product from '@/components/Product';

jest.mock('axios');

describe('Product', () => {
  it('renders Product ', () => {
    const products = { 
          id: 1, 
          title: 'Product 1', 
          image: 'http: //i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
          price: 10,
          amount: 1
      };
    const { getByText } = render(<Product id={products.id} image={products.image} title={products.title} price={products.price} amount={products.amount} />);
    expect(getByText('Product 1')).toBeTruthy();
  });
});