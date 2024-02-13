import React, { useState, useEffect } from 'react';

export const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // The componentDidCatch equivalent for functional components
    const errorHandler = (error, errorInfo) => {
      console.error('Error caught by error boundary:', error, errorInfo);
      setHasError(true);
    };

    // Attach the error handler
    window.addEventListener('error', errorHandler);

    // Cleanup the error handler when the component unmounts
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  // Render the fallback UI if an error occurs
  return hasError ? <FallbackUI /> : children;
};

const FallbackUI = () => (
  <div>
    <h1>Something went wrong!</h1>
    <p>Please try refreshing the page or contact support.</p>
  </div>
);