import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        Select a product to view details
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Details</h2>
      <div style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
        <p style={{ fontSize: '24px', color: '#007bff', margin: '0 0 15px 0' }}>
          ${product.price}
        </p>
        <p style={{ color: '#666', margin: '0' }}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail; 