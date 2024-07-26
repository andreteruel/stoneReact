import { create } from 'zustand';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}

export interface CartStore {
  cart: Product[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  attAmount: (product: Product) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  total: 0,
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
      total: state.cart.reduce((total, item) => total + (item.price*item.amount), 0)+(product.price*product.amount)
    })),
  removeFromCart: (productRemove) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productRemove.id),
      total: state.cart.reduce((total, item) => total + (item.price*item.amount), 0)-(productRemove.price*productRemove.amount)
    })),
  attAmount: (productAtt) =>
    set((state) => {
      const newCart = state.cart.map(product => product.id === productAtt.id ? { ...product, amount: productAtt.amount } : product)
      return ({
        cart: newCart,
        total: newCart.reduce((total, item) => total + (item.price*item.amount), 0)
      })
    }),
}));