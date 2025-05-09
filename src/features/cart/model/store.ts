import { create } from 'zustand';
import { Product } from '../../../entities/product/model/types';
import { Cart, CartItem } from './types';

interface CartStore extends Cart {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  return items.reduce(
    (acc, item) => {
      const itemPrice = item.product.price * item.quantity;
      return {
        totalItems: acc.totalItems + item.quantity,
        totalPrice: acc.totalPrice + itemPrice,
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  
  addToCart: (product, quantity) => 
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      
      let updatedItems: CartItem[];
      
      if (existingItemIndex !== -1) {
        // Update quantity if product already exists in cart
        updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
      } else {
        // Add new item to cart
        updatedItems = [...state.items, { product, quantity }];
      }
      
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }),
  
  removeFromCart: (productId) =>
    set((state) => {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== productId
      );
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }),
  
  updateCartItemQuantity: (productId, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
      
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }),
  
  clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
}));