import axios from 'axios';

// API 기본 URL 설정 (실제 프로덕션에서는 환경 변수 사용 권장)
const API_URL = 'https://api.example.com';

// Axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    // 요청 전에 처리할 작업
    // 예: 토큰 추가
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터 가공
    return response.data;
  },
  (error) => {
    // 에러 처리
    if (error.response) {
      // 서버 응답이 있는 경우 (2xx 범위를 벗어난 상태 코드)
      if (error.response.status === 401) {
        // 인증 에러 처리
        localStorage.removeItem('auth_token');
        // 로그인 페이지로 리디렉션 등 처리
      }
    } else if (error.request) {
      // 요청이 이루어졌으나 응답이 없는 경우
      console.error('No response received:', error.request);
    } else {
      // 요청 설정 시 에러 발생
      console.error('Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// 타입 안전한 API 호출 함수들
export const api = {
  get: <T>(url: string, params?: object) => 
    apiClient.get<T, T>(url, { params }),
  
  post: <T>(url: string, data?: object) => 
    apiClient.post<T, T>(url, data),
  
  put: <T>(url: string, data?: object) => 
    apiClient.put<T, T>(url, data),
  
  patch: <T>(url: string, data?: object) => 
    apiClient.patch<T, T>(url, data),
  
  delete: <T>(url: string) => 
    apiClient.delete<T, T>(url),
};