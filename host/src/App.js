import React, { useState, Suspense } from 'react';

const SearchBar = React.lazy(() => import('searchBar/SearchBar'));
const ProductList = React.lazy(() => import('productList/ProductList'));
const ProductDetail = React.lazy(() => import('productDetail/ProductDetail'));

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Micro Frontend</h1>
      <div style={{ marginBottom: '20px' }}>
        <Suspense fallback={<div>Loading SearchBar...</div>}>
          <SearchBar onSearch={handleSearch} />
        </Suspense>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<div>Loading ProductList...</div>}>
            <ProductList 
              searchQuery={searchQuery} 
              onProductSelect={handleProductSelect}
            />
          </Suspense>
        </div>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<div>Loading ProductDetail...</div>}>
            <ProductDetail product={selectedProduct} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App; 