import React from 'react';

// Mock data for demonstration
const mockProducts = [
  { id: 1, name: 'Product 1', price: 99.99, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 149.99, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 199.99, description: 'Description for Product 3' },
];

const ProductList = ({ searchQuery = '', onProductSelect }) => {
  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            onClick={() => onProductSelect(product)}
            style={{
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: '#fff',
              transition: 'background-color 0.2s',
              ':hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>{product.name}</h3>
            <p style={{ margin: '0', color: '#666' }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 