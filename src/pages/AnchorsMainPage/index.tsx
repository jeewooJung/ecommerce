import { useState, useEffect } from 'react';

// 상품 데이터 타입 정의
interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  imageUrl: string;
  isSoldOut: boolean;
  isLiked: boolean;
}

export const AnchorsMainPage = () => {
  const [currentBanner, setCurrentBanner] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [hideOutOfStock, setHideOutOfStock] = useState<boolean>(false);

  // 상품 데이터 로드 (실제로는 API에서 가져올 것)
  useEffect(() => {
    // 실제 이미지 사용하여 상품 데이터 생성
    const dummyProducts: Product[] = Array.from({ length: 18 }, (_, index) => {
      // 이미지 번호는 1부터 48까지 순환
      const imageNumber = (index % 48) + 1;
      return {
        id: `product-${index + 1}`,
        name: '제품 이름은 최대 두줄까지 들어갑니다. 제품 이름은 최대 두줄까지 들어갑니다.',
        code: `S3202UTZQ_M${index + 928}`,
        price: 1000000,
        imageUrl: `https://glnx9dqg6236.edge.naverncp.com/ori (${imageNumber}).png`,
        isSoldOut: index % 3 === 0,
        isLiked: index % 5 === 0,
      };
    });

    setProducts(dummyProducts);
  }, []);

  // 품절 상품 필터링
  const filteredProducts = hideOutOfStock 
    ? products.filter(product => !product.isSoldOut) 
    : products;

  // 가격 포맷팅 함수
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  };

  // 좋아요 토글 함수
  const toggleLike = (productId: string) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, isLiked: !product.isLiked } 
          : product
      )
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* 모바일 레이아웃을 위한 컨테이너 */}
      <div className="w-full max-w-[390px] mx-auto relative">
        {/* 공지 배너 */}
        <div className="w-full bg-[#191919] py-2 px-4 flex justify-center items-center">
          <span className="text-white text-xs font-normal">CS/구매/환불 안내</span>
          <a href="#" className="text-[#999999] text-xs font-medium ml-2 hover:text-white underline">자세히보기</a>
        </div>

        {/* 모바일 GNB */}
        <div className="w-full flex justify-between items-center px-4 py-3">
          <div className="h-[18px]">
            <h1 className="text-lg font-bold">ANCHORES</h1>
          </div>
          <div className="flex gap-4 items-center">
            <button className="flex items-center justify-center bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16 16" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex items-center justify-center bg-transparent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" />
                  <path d="M3 6H21" />
                  <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" />
                </svg>
              </button>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[11px] font-medium">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="flex-1 flex flex-col pb-[72px]">
          {/* 메인 배너/KV 슬라이더 */}
          <div className="w-full relative">
            <div className="w-full h-[500px] relative bg-gray-100">
              <img 
                src="https://glnx9dqg6236.edge.naverncp.com/ori (34).png" 
                alt="메인 배너 이미지" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <div className="absolute bottom-5 right-5 flex flex-col gap-1 p-5">
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-xl font-semibold">
                    NEW ANCHORS<br />PRIVATE SALE
                  </h2>
                  <p className="text-white text-xs">PRIVATE SALE</p>
                </div>
                <div className="bg-black/70 text-white px-2 h-5 rounded-full flex items-center gap-0.5 self-end backdrop-blur-md">
                  <span className="text-xs">{currentBanner}</span>
                  <span className="text-xs text-gray-400">/</span>
                  <span className="text-xs text-gray-400">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* 사이즈 가이드 및 필터 영역 */}
          <div className="w-full border-b border-[#EBEBEB] py-2 px-4 flex justify-center">
            <button className="py-2 w-full flex justify-center items-center gap-2 text-sm font-semibold bg-[#191919] text-white rounded">
              <span>사이즈 가이드</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" />
              </svg>
            </button>
          </div>

          {/* 필터 옵션 */}
          <div className="w-full flex justify-between items-center p-3 border-b border-[#EBEBEB]">
            <div className="flex items-center gap-1.5">
              <input 
                type="checkbox" 
                id="hideOutOfStock"
                checked={hideOutOfStock}
                onChange={() => setHideOutOfStock(!hideOutOfStock)}
                className="w-4 h-4"
              />
              <label htmlFor="hideOutOfStock" className="text-[13px] font-semibold text-[#191919]">품절제외</label>
            </div>
            <button className="flex items-center bg-transparent">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="3" height="3" />
                <rect x="1" y="9" width="3" height="3" />
                <rect x="7" y="3" width="3" height="3" />
                <rect x="7" y="9" width="3" height="3" />
                <rect x="13" y="3" width="3" height="3" />
                <rect x="13" y="9" width="3" height="3" />
              </svg>
            </button>
          </div>

          {/* 상품 리스트 */}
          <div className="w-full grid grid-cols-2 gap-px">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col">
                {/* 상품 썸네일 */}
                <div className="relative w-full aspect-square bg-[#F2F2F4]">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  {product.isSoldOut && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">SOLD OUT</span>
                    </div>
                  )}
                </div>

                {/* 상품 정보 */}
                <div className="flex flex-col p-3 pb-6 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[#191919] text-[13px] leading-[1.5em] line-clamp-2 font-normal">
                        {product.name}
                      </h3>
                      <p className="text-[#999999] text-[11px] leading-[1.4em]">
                        {product.code}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center">
                        <span className="text-[#191919] text-[13px] font-semibold">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      {product.isSoldOut && (
                        <div className="inline-block px-1 self-start bg-[#F2F2F2] border border-[#EBEBEB] rounded-[1px]">
                          <span className="text-[#444444] text-[11px] font-medium">품절</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button 
                      className="flex items-center justify-center mr-3 bg-transparent"
                      onClick={() => toggleLike(product.id)}
                    >
                      {product.isLiked ? (
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="#E11E1D" stroke="#E11E1D" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 13.6L7.05 12.74C3.4 9.44 1 7.28 1 4.6C1 2.44 2.76 0.8 4.8 0.8C5.92 0.8 7.04 1.34 7.8 2.2C8.56 1.34 9.68 0.8 10.8 0.8C12.84 0.8 14.6 2.44 14.6 4.6C14.6 7.28 12.2 9.44 8.55 12.74L8 13.6Z" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 13.6L7.05 12.74C3.4 9.44 1 7.28 1 4.6C1 2.44 2.76 0.8 4.8 0.8C5.92 0.8 7.04 1.34 7.8 2.2C8.56 1.34 9.68 0.8 10.8 0.8C12.84 0.8 14.6 2.44 14.6 4.6C14.6 7.28 12.2 9.44 8.55 12.74L8 13.6Z" />
                        </svg>
                      )}
                    </button>
                    <button className="flex items-center justify-center bg-transparent">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2L1 4V14C1 14.53 1.211 15.039 1.586 15.414C1.961 15.789 2.47 16 3 16H13C13.53 16 14.039 15.789 14.414 15.414C14.789 15.039 15 14.53 15 14V4L12 2H4Z" />
                        <path d="M1 4H15" />
                        <path d="M11 7C11 8.06087 10.5786 9.07828 9.82843 9.82843C9.07828 10.5786 8.06087 11 7 11C5.93913 11 4.92172 10.5786 4.17157 9.82843C3.42143 9.07828 3 8.06087 3 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 푸터 */}
        <footer className="w-full px-4 py-6 pb-[120px] border-t border-[#EBEBEB] flex flex-col gap-3">
          <div className="w-full flex items-center gap-2">
            <button className="text-[13px] font-semibold text-[#191919]">개인정보처리방침</button>
            <div className="w-1 h-1 rounded-full bg-[#666666]"></div>
            <button className="text-[13px] text-[#191919]">이용약관</button>
          </div>
          <div className="w-full flex items-center gap-1">
            <span className="text-[13px] text-[#666666]">이메일 :</span>
            <span className="text-[13px] text-[#191919]">customer@anchors-biz.com</span>
          </div>
          <div className="w-full">
            <span className="text-[13px] text-[#666666]">© Anchors All rights reserved</span>
          </div>
        </footer>

        {/* 하단 고정 버튼 및 탭 바 */}
        <div className="fixed bottom-0 w-full max-w-[390px] mx-auto">
          {/* 플로팅 버튼 */}
          <div className="flex flex-col items-end gap-3 px-4">
            <button className="w-12 h-12 rounded-full bg-[#191919] flex items-center justify-center">
              <span className="text-white text-[10px] font-semibold">QUOTA</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-white border border-[#DFDFDF] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" />
              </svg>
            </button>
          </div>

          {/* 탭 바 */}
          <div className="w-full h-[60px] bg-white border-t border-[#EBEBEB] flex items-stretch">
            <div className="flex-1 flex flex-col items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
              <span className="text-[11px] font-medium text-[#191919]">홈</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              <span className="text-[11px] font-medium text-[#999999]">카테고리</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-[11px] font-medium text-[#999999]">좋아요</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              </svg>
              <span className="text-[11px] font-medium text-[#999999]">마이페이지</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnchorsMainPage;