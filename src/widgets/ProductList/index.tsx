import { FC } from 'react';
import { Product } from '../../entities/product/model/types';
import ProductCard from '../../entities/product/ui/ProductCard';
import AddToCart from '../../features/cart/ui/AddToCart';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductList: FC<ProductListProps> = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl text-gray-500">No products found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="flex flex-col">
          <ProductCard product={product} className="flex-grow" />
          <div className="mt-4">
            <AddToCart product={product} onAddToCart={onAddToCart} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;