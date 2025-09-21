import React from "react";

export type ProductsPageProps = {
  onBackToHome?: () => void;
};

const ProductsPage: React.FC<ProductsPageProps> = ({ onBackToHome }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    <h1 className="text-4xl font-bold mb-6">Products Page</h1>
    <p className="text-lg mb-8">Explore our products here.</p>
    {onBackToHome && (
      <button
        onClick={onBackToHome}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Back to Home
      </button>
    )}
  </div>
);

export default ProductsPage;
