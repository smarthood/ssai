import React from 'react'
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ element: Element, redirectto: path }) {
  return isAuthenticated() ? (
    <Element />
  ) : (
    <Navigate to={path} replace state={{ from: window.location.pathname }} />
  );
}

// Placeholder function, replace it with your actual authentication logic
const isAuthenticated = () => {
  return false; // For demonstration purposes, always return true
};
