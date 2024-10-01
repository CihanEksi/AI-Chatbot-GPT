import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivatePage = ({ children }) => {
  const isAuthenticated = Cookies.get('sessionID'); // Adjust authentication logic
  return children;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivatePage;