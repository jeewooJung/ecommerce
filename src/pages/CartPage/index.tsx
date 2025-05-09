import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../features/cart/model/store';
import Button from '../../shared/ui/Button';

const CartPage: FC = () => {
  const { t } = useTranslation();
  const { items, totalItems, totalPrice, updateCartItemQuantity, removeFromCart, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <ShoppingCart size={64} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{t('cart.emptyCart')}</h2>
        <p className="text-gray-500 mb-8">장바구니에 상품이 없습니다. 쇼핑을 계속해 보세요.</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <ArrowLeft size={16} className="mr-2" /> 쇼핑 계속하기
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('cart.title')}</h1>
        <button
          onClick={() => clearCart()}
          className="text-red-500 hover:text-red-700 flex items-center"
        >
          <Trash2 size={16} className="mr-1" /> {t('cart.clearCart')}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 장바구니 아이템 리스트 */}
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상품 정보
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  가격
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  수량
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  총액
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  삭제
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => {
                const { product, quantity } = item;
                const { id, title, price, discountPercentage, thumbnail } = product;
                
                // 할인가 계산
                const discountedPrice = discountPercentage 
                  ? price - (price * (discountPercentage / 100))
                  : price;
                  
                // 아이템 총액
                const itemTotal = discountedPrice * quantity;
                
                return (
                  <tr key={id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={thumbnail}
                            alt={title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4">
                          <Link to={`/products/${id}`} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                            {title}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {discountPercentage ? (
                        <div>
                          <div className="text-sm font-medium text-gray-900">${discountedPrice.toFixed(2)}</div>
                          <div className="text-sm text-gray-500 line-through">${price.toFixed(2)}</div>
                        </div>
                      ) : (
                        <div className="text-sm font-medium text-gray-900">${price.toFixed(2)}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateCartItemQuantity(id, Math.max(1, quantity - 1))}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-center w-10">{quantity}</span>
                        <button
                          onClick={() => updateCartItemQuantity(id, Math.min(product.stock, quantity + 1))}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${itemTotal.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => removeFromCart(id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 결제 정보 */}
        <div className="bg-gray-50 p-6 rounded-lg mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">상품 수량</span>
            <span className="font-medium">{totalItems}개</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">배송비</span>
            <span className="font-medium">무료</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold border-t border-gray-300 pt-4 mt-4">
            <span>{t('cart.total')}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="mt-6">
            <Button variant="primary" className="w-full py-3">
              {t('cart.checkout')}
            </Button>
          </div>
          <div className="mt-4">
            <Link 
              to="/"
              className="inline-block text-center w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;