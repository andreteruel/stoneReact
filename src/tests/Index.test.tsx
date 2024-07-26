import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Index from '@/app/tabs/catalog/index';
import * as api from '@/services/comics';
import { ComicsPros } from '@/services/types';

jest.mock('@/services/comics');

const mockedComics: ComicsPros[] = [
  {
    id: 1,
    title: "Comic 1",
    thumbnail: {
      path: "http://path/to/image",
      extension: "jpg",
    },
    prices:[{
      price: 29.90,
      type: "digital"
    }]
  },
  {
    id: 2,
    title: "Comic 2",
    thumbnail: {
      path: "http://path/to/image",
      extension: "jpg",
    },
    prices:[{
      price: 19.90,
      type: "digital"
    }]
  },
];

describe('Index', () => {
  beforeEach(() => {
    (api.getMarvelComics as jest.Mock).mockResolvedValue(mockedComics);
  });

  it('renders initial comics and renders the first call to api', async () => {
    const { getByText } = render(<Index />);

    await waitFor(() => {
    expect(getByText('Comic 1')).toBeTruthy();
    expect(getByText('Comic 2')).toBeTruthy();
    });
    
    await waitFor(() => {
        expect(api.getMarvelComics).toHaveBeenCalledTimes(1);
        expect(api.getMarvelComics).toHaveBeenCalledWith(10, 0);
    });
  });

  it('displays loading indicator while fetching data', async () => {
    const { getByTestId } = render(<Index />);

    await waitFor(() => {
        expect(getByTestId('loading')).toBeTruthy();
      });

    await waitFor(() => {
      expect(api.getMarvelComics).toHaveBeenCalled();
    });
  });
});