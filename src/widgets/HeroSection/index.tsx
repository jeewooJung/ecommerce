import { Button } from "../../shared/ui/Button";

export const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* 콘텐츠 */}
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">LUXE 스태프 세일</h1>
          <p className="text-xl md:text-2xl mb-8">최대 70% 할인된 가격으로 럭셔리 아이템을 만나보세요</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="xl" className="min-w-[180px]">
              컬렉션 보기
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="min-w-[180px] bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              자세히 알아보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};