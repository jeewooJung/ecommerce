import { FC, useState } from 'react';
import { Product } from '../../../../entities/product/model/types';
import Button from '../../../../shared/ui/Button';

interface AddToCartProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  className?: string;
}

export const AddToCart: FC<AddToCartProps> = ({ product, onAddToCart, className = '' }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <div className="flex items-center">
        <span className="text-gray-700 mr-4">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="px-3 py-1 text-center w-12">{quantity}</span>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= product.stock}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
        <span className="ml-3 text-sm text-gray-500">
          {product.stock} available
        </span>
      </div>
      
      <Button 
        onClick={handleAddToCart} 
        variant="primary" 
        className="w-full"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;