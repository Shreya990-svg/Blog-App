import React from 'react';

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
      {children}
    </div>
  );
}

export default Container;
