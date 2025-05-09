import { Button } from "../../shared/ui/Button";

export const PromoSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">LUXE 스태프 세일 특별 혜택</h2>
            <p className="text-lg mb-8 text-gray-300">
              스태프 세일 기간 동안에만 제공되는 특별 할인과 혜택을 놓치지 마세요. 
              최고의 시그니처 제품을 최대 70% 할인된 가격으로 만나볼 수 있는 기회입니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">직원 전용 추가 할인</h3>
                  <p className="text-gray-300">구매 금액에 따라 추가 할인 혜택을 드립니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">선착순 한정 상품</h3>
                  <p className="text-gray-300">수량 한정 제품을 만나보세요.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">무료 배송</h3>
                  <p className="text-gray-300">모든 주문에 무료 배송 혜택을 드립니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">특별 포장 서비스</h3>
                  <p className="text-gray-300">모든 상품에 특별 포장 서비스를 제공합니다.</p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              자세히 알아보기
            </Button>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1610069302033-6fee1f5791d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt="LUXE 프로모션"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-lg shadow-xl">
                <p className="text-sm font-bold">기간 한정</p>
                <p className="text-xl font-black">최대 70% 할인</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};