import React from "react";
import { Link } from "react-router-dom"; // remove if not using react-router

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-indigo-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
