import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';
import MainLayout from '../widgets/MainLayout';
import { DiorMainPage } from '../pages/DiorMainPage';
import { LuxeMainPage } from '../pages/LuxeMainPage';
import { AnchorsMainPage } from '../pages/AnchorsMainPage';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';

// Dior 스타일의 레이아웃 래퍼 컴포넌트
const DiorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

// 애플리케이션 라우트 정의
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AnchorsMainPage />, // AnchorsMainPage를 최상위 라우트로 설정
    index: true,
  },
  {
    path: '/luxe',
    element: <LuxeMainPage />, // LuxeMainPage는 /luxe 경로로 이동
  },
  {
    path: '/dior',
    element: <DiorMainPage />, // 원래 DiorMainPage는 /dior 경로로 접근 가능
  },
  {
    path: '/product/:id',
    element: (
      <DiorLayout>
        <ProductDetailPage />
      </DiorLayout>
    ),
  },
  {
    path: '/cart',
    element: (
      <DiorLayout>
        <CartPage />
      </DiorLayout>
    ),
  },
  {
    path: '/original',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ],
  },
  {
    path: '*',
    element: (
      <DiorLayout>
        <NotFoundPage />
      </DiorLayout>
    ),
  }
];