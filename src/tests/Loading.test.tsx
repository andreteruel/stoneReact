import React from 'react';
import { render } from '@testing-library/react-native';
import Loading from '@/components/Loading';

describe('Loading', () => {
  it('renders activity indicator', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });
});