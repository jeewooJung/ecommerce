import { FC, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../../shared/api/products';
import { Product } from '../../entities/product/model/types';
import ProductList from '../../widgets/ProductList';
import { AppContext } from '../../app/providers';

export const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const appContext = useContext(AppContext);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('상품을 불러오는 데 실패했습니다. 나중에 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product: Product, quantity: number) => {
    if (appContext) {
      appContext.addToCart(product, quantity);
      alert(`${product.title} ${quantity}개가 장바구니에 추가되었습니다.`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <p className="text-xl">{error}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            다시 시도하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">전자기기 쇼핑몰</h1>
        
        <div className="flex items-center mt-4">
          <div className="ml-auto flex items-center">
            <div className="relative">
              <button className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                </svg>
                <span>장바구니</span>
                {appContext && appContext.cart.totalItems > 0 && (
                  <span className="ml-1 bg-white text-blue-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {appContext.cart.totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">인기 상품</h2>
          <ProductList 
            products={products} 
            onAddToCart={handleAddToCart} 
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;