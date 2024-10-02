import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">
          The page you're looking for doesn't seem to exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Take me home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;