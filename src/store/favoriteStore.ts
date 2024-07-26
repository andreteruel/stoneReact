import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}

export interface FavoriteStore {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
    persist(
        (set) => ({
            favorites: [],
            addToFavorites: (product) =>
                set((state) => ({
                    favorites: [...state.favorites, product],
                })),
            removeFromFavorites: (productRemove) =>
                set((state) => ({
                    favorites: state.favorites.filter((product) => product.id !== productRemove.id),
                })),
        }),
        {
            name: 'favorite-store',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);