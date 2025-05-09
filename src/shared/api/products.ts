import { Product } from '../../entities/product/model/types';

// 임시 상품 데이터
export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 14 Pro',
    description: 'Apple iPhone 14 Pro 256GB Deep Purple',
    price: 1299.99,
    discountPercentage: 10,
    rating: 4.8,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]
  },
  {
    id: '2',
    title: 'Samsung Galaxy S23 Ultra',
    description: 'Samsung Galaxy S23 Ultra 512GB Phantom Black',
    price: 1199.99,
    discountPercentage: 15,
    rating: 4.7,
    stock: 42,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]
  },
  {
    id: '3',
    title: 'MacBook Pro 16"',
    description: 'Apple MacBook Pro 16" with M2 Pro chip',
    price: 2499.99,
    discountPercentage: 8,
    rating: 4.9,
    stock: 16,
    brand: 'Apple',
    category: 'laptops',
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]
  },
  {
    id: '4',
    title: 'Sony WH-1000XM5',
    description: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    price: 399.99,
    discountPercentage: 12,
    rating: 4.6,
    stock: 28,
    brand: 'Sony',
    category: 'headphones',
    thumbnail: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]
  },
  {
    id: '5',
    title: 'iPad Pro 11"',
    description: 'Apple iPad Pro 11" with M2 chip, 256GB, Wi-Fi',
    price: 899.99,
    discountPercentage: 5,
    rating: 4.7,
    stock: 23,
    brand: 'Apple',
    category: 'tablets',
    thumbnail: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]
  },
  {
    id: '6',
    title: 'Nintendo Switch',
    description: 'Nintendo Switch OLED Model with White Joy‑Con',
    price: 349.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 19,
    brand: 'Nintendo',
    category: 'gaming',
    thumbnail: 'https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ]
  }
];

// 상품 데이터를 가져오는 mock API 함수
export const fetchProducts = (): Promise<Product[]> => {
  return Promise.resolve(mockProducts);
};

export const fetchProductById = (id: string): Promise<Product | undefined> => {
  return Promise.resolve(mockProducts.find(product => product.id === id));
};