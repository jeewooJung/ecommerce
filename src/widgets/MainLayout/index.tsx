import { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { useCartStore } from '../../features/cart/model/store';

const MainLayout: FC = () => {
  const { t } = useTranslation();
  const { totalItems } = useCartStore();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-600">{t('app.title')}</h1>
            </Link>

            {/* 검색창 */}
            <div className="hidden md:flex flex-1 mx-8 relative">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </div>
              </div>
            </div>

            {/* 네비게이션 링크 */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                홈
              </Link>
              <Link to="/categories" className="text-gray-600 hover:text-blue-600 transition-colors">
                카테고리
              </Link>
              <Link to="/deals" className="text-gray-600 hover:text-blue-600 transition-colors">
                특가
              </Link>
            </nav>

            {/* 사용자 메뉴 */}
            <div className="flex items-center space-x-4">
              {/* 사용자 아이콘 */}
              <button className="text-gray-600 hover:text-blue-600">
                <User size={20} />
              </button>
              
              {/* 장바구니 아이콘 */}
              <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              {/* 모바일 메뉴 버튼 */}
              <button className="md:hidden text-gray-600 hover:text-blue-600">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">고객 서비스</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">고객 지원</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">자주 묻는 질문</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">반품 및 환불</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">회사 소개</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">소개</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">채용 정보</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">뉴스</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-300">이메일: support@example.com</p>
              <p className="text-gray-300">전화번호: 02-1234-5678</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.665.25 1.23.582 1.786 1.14.558.557.89 1.122 1.14 1.786.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.14 1.786c-.557.557-1.123.889-1.787 1.14-.637.247-1.363.415-2.427.464-1.102.047-1.368.06-4.123.06-2.755 0-3.021-.013-4.123-.06-1.064-.049-1.791-.217-2.427-.464a4.903 4.903 0 01-1.786-1.14c-.558-.557-.889-1.123-1.14-1.786-.247-.637-.418-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.048-1.064.217-1.791.465-2.427.251-.665.582-1.23 1.14-1.786.557-.558 1.122-.889 1.786-1.14.637-.247 1.363-.416 2.427-.465 1.024-.047 1.379-.06 3.808-.06h.63zm-.63 1.802h-.63c-2.506 0-2.784.011-3.787.058-.975.045-1.504.207-1.857.344-.467.182-.802.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.003-.059 1.281-.059 3.788v.63c0 2.506.012 2.785.059 3.788.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.683.566 1.15.747.353.137.882.3 1.857.345 1.004.046 1.28.058 3.787.058h.63c2.506 0 2.785-.012 3.787-.058.975-.046 1.504-.208 1.857-.345.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.003.06-1.282.06-3.787v-.63c0-2.506-.013-2.785-.06-3.788-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.003-.047-1.282-.059-3.787-.059zm1.26 3.138a1.26 1.26 0 110 2.52 1.26 1.26 0 010-2.52zm-3.79 5.06a3.79 3.79 0 117.58 0 3.79 3.79 0 01-7.58 0zm1.802 0a1.989 1.989 0 103.977 0 1.989 1.989 0 00-3.977 0z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.645 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} 전자기기 쇼핑몰. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;