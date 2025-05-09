import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Star, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { fetchProductById } from '../../shared/api/products';
import { Product } from '../../entities/product/model/types';
import AddToCart from '../../features/cart/ui/AddToCart';
import { useCartStore } from '../../features/cart/model/store';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToCart } = useCartStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // React Query를 사용한 데이터 페칭
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id || ''),
    enabled: !!id,
  });

  // 이미지 선택 변경
  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  // 장바구니 추가 핸들러
  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity);
    alert(`${product.title} ${quantity}개가 장바구니에 추가되었습니다.`);
  };

  // 뒤로가기 핸들러
  const handleGoBack = () => {
    navigate(-1);
  };

  // 예상 배송일 계산 (현재 날짜 + 3일)
  const expectedDeliveryDate = format(
    new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    'yyyy년 MM월 dd일 EEEE',
    { locale: ko }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl text-red-500 mb-4">상품을 찾을 수 없습니다</h2>
        <button
          onClick={handleGoBack}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <ArrowLeft size={16} className="mr-2" /> 뒤로 가기
        </button>
      </div>
    );
  }

  const { 
    title, description, price, discountPercentage, 
    rating, stock, brand, category, images 
  } = product;

  // 할인가 계산
  const discountedPrice = discountPercentage 
    ? price - (price * (discountPercentage / 100))
    : null;

  // 별점 표시
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="text-gray-300" size={18} />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="fill-yellow-400 text-yellow-400" size={18} />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={18} />);
      }
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* 뒤로 가기 버튼 */}
      <button
        onClick={handleGoBack}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={16} className="mr-1" /> 뒤로 가기
      </button>

      {/* 상품 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 왼쪽: 이미지 갤러리 */}
        <div>
          <div className="mb-4 aspect-square overflow-hidden rounded-lg border border-gray-200">
            <img
              src={images[selectedImageIndex]}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* 썸네일 갤러리 */}
          {images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md border-2 overflow-hidden ${
                    selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${title} - 이미지 ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 오른쪽: 상품 정보 */}
        <div className="flex flex-col">
          <div className="mb-auto">
            {/* 카테고리 및 브랜드 */}
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500">{category}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm font-medium">{brand}</span>
            </div>

            {/* 제목 */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>

            {/* 평점 */}
            {rating && (
              <div className="flex items-center mb-4">
                {renderStars(rating)}
                <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
              </div>
            )}

            {/* 가격 정보 */}
            <div className="mt-4 mb-6">
              {discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ${price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm font-medium text-red-500">
                    {Math.round(discountPercentage as number)}% 할인
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
              )}
            </div>

            {/* 설명 */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">상품 설명</h2>
              <p className="text-gray-600">{description}</p>
            </div>

            {/* 배송 정보 */}
            <div className="mb-6">
              <div className="flex items-center text-green-600 mb-2">
                <Truck size={18} className="mr-2" />
                <span className="font-medium">무료 배송</span>
              </div>
              <p className="text-sm text-gray-600">
                예상 도착: {expectedDeliveryDate}
              </p>
            </div>

            {/* 보증 및 반품 정책 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start mb-2">
                <ShieldCheck size={18} className="text-blue-600 mr-2 mt-0.5" />
                <span className="font-medium">1년 제조사 보증</span>
              </div>
              <div className="flex items-start">
                <RotateCcw size={18} className="text-blue-600 mr-2 mt-0.5" />
                <span className="font-medium">30일 이내 무료 반품</span>
              </div>
            </div>
          </div>

          {/* 재고 정보 */}
          <div className={`mb-4 ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? (
              <span>{stock}개 남음</span>
            ) : (
              <span>품절</span>
            )}
          </div>

          {/* 장바구니 추가 버튼 */}
          {stock > 0 ? (
            <AddToCart
              product={product}
              onAddToCart={(product, quantity) => handleAddToCart(product, quantity)}
              className="mt-4"
            />
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-600 py-3 px-4 rounded-md cursor-not-allowed"
            >
              품절
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;