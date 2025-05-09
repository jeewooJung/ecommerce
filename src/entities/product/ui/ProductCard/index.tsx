import { FC } from 'react';
import { Product } from '../../model/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ product, className = '' }) => {
  const { title, price, thumbnail, discountPercentage, rating } = product;
  
  // Calculate discounted price if discount exists
  const discountedPrice = discountPercentage 
    ? price - (price * (discountPercentage / 100))
    : null;
  
  return (
    <div className={`rounded-lg overflow-hidden shadow-md bg-white ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {Math.round(discountPercentage)}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col">
            {discountedPrice ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          
          {rating && (
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-1">{rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;