import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/Button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, originalPrice, imageUrl, category }) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Link to={`/product/${id}`}>
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-[350px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs font-bold">
            -{discount}%
          </div>
        </Link>
      </div>
      
      <div>
        <p className="text-xs text-gray-500 uppercase mb-1">{category}</p>
        <h3 className="font-medium text-base mb-1">
          <Link to={`/product/${id}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold">{price.toLocaleString()}원</span>
          <span className="text-gray-500 text-sm line-through">{originalPrice.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "LUXE 레이디 백 미디움",
      price: 3800000,
      originalPrice: 7600000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      category: "가방"
    },
    {
      id: "2",
      name: "시그니처 실크 블라우스",
      price: 890000,
      originalPrice: 1780000,
      imageUrl: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      category: "여성 의류"
    },
    {
      id: "3",
      name: "프리미엄 울 재킷",
      price: 1200000,
      originalPrice: 2400000,
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
      category: "남성 의류"
    },
    {
      id: "4",
      name: "럭스 시그니처 향수 50ml",
      price: 120000,
      originalPrice: 240000,
      imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      category: "향수"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">인기 제품</h2>
            <p className="text-gray-600">스태프 세일 기간 동안 가장 인기 있는 제품</p>
          </div>
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            전체보기
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};