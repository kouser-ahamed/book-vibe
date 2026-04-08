import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;