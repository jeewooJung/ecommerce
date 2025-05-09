import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/Button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            LUXE
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:text-gray-600 font-medium">
              홈
            </Link>
            <Link to="/products" className="text-black hover:text-gray-600 font-medium">
              제품
            </Link>
            <Link to="/new-arrivals" className="text-black hover:text-gray-600 font-medium">
              신상품
            </Link>
            <Link to="/collections" className="text-black hover:text-gray-600 font-medium">
              컬렉션
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            <Link to="/profile">
              <Button variant="primary" size="sm">
                로그인
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};