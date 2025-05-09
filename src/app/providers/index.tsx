import { FC, ReactNode, createContext, useState } from 'react';
import { Cart, CartItem } from '../../features/cart/model/types';
import { Product } from '../../entities/product/model/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 15, // 15분
      retry: 1,
    },
  },
});

// Context 정의
interface AppContextType {
  cart: Cart;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider 컴포넌트
interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0
  });

  const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
    return items.reduce((acc, item) => {
      const itemPrice = item.product.price * item.quantity;
      return {
        totalItems: acc.totalItems + item.quantity,
        totalPrice: acc.totalPrice + itemPrice
      };
    }, { totalItems: 0, totalPrice: 0 });
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.id === product.id);
      
      let updatedItems: CartItem[];
      
      if (existingItemIndex !== -1) {
        // Update quantity if product already exists in cart
        updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex].quantity += quantity;
      } else {
        // Add new item to cart
        updatedItems = [...prevCart.items, { product, quantity }];
      }
      
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.product.id !== productId);
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice
      };
    });
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
      
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice
      };
    });
  };

  const contextValue: AppContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default AppProviders;