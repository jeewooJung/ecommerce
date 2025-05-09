import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 번역 리소스
const resources = {
  en: {
    translation: {
      // 일반
      app: {
        title: 'Electronics Shop',
        loading: 'Loading...',
        error: 'An error occurred. Please try again later.',
        retry: 'Retry',
      },
      // 상품
      product: {
        popularProducts: 'Popular Products',
        noProducts: 'No products found',
        inStock: 'In Stock',
        outOfStock: 'Out of Stock',
        discount: '% OFF',
        quantity: 'Quantity',
        available: 'available',
      },
      // 장바구니
      cart: {
        title: 'Shopping Cart',
        emptyCart: 'Your cart is empty',
        addToCart: 'Add to Cart',
        removeFromCart: 'Remove from Cart',
        itemAdded: 'added to cart',
        checkout: 'Checkout',
        total: 'Total',
        clearCart: 'Clear Cart',
      }
    }
  },
  ko: {
    translation: {
      // 일반
      app: {
        title: '전자기기 쇼핑몰',
        loading: '로딩 중...',
        error: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
        retry: '다시 시도하기',
      },
      // 상품
      product: {
        popularProducts: '인기 상품',
        noProducts: '상품이 없습니다',
        inStock: '재고 있음',
        outOfStock: '품절',
        discount: '% 할인',
        quantity: '수량',
        available: '사용 가능',
      },
      // 장바구니
      cart: {
        title: '장바구니',
        emptyCart: '장바구니가 비어있습니다',
        addToCart: '장바구니에 추가',
        removeFromCart: '장바구니에서 제거',
        itemAdded: '장바구니에 추가됨',
        checkout: '결제하기',
        total: '총액',
        clearCart: '장바구니 비우기',
      }
    }
  }
};

// i18next 초기화
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // 기본 언어
    fallbackLng: 'en', // 기본 언어에 번역이 없는 경우 대체할 언어
    interpolation: {
      escapeValue: false, // React에서는 이미 XSS를 방지하므로 false로 설정
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;