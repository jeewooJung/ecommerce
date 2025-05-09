import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        죄송합니다. 요청하신 페이지를 찾을 수 없습니다. URL을 확인하거나 홈페이지로 이동해 주세요.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <ArrowLeft size={16} className="mr-2" /> 홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;