import React from 'react';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: 'MacBook Pro 14" M3 Pro',
    price: 1999.99,
    description: 'Apple M3 Pro chip, 18GB RAM, 512GB SSD, 14-inch Liquid Retina XDR display'
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5',
    price: 399.99,
    description: 'Industry-leading noise cancellation, 30-hour battery life, premium sound quality'
  },
  {
    id: 3,
    name: 'Samsung 65" QLED 4K TV',
    price: 1299.99,
    description: 'Quantum HDR, Smart TV features, 4K resolution, HDR10+ support'
  },
  {
    id: 4,
    name: 'Nintendo Switch OLED',
    price: 349.99,
    description: '7-inch OLED screen, 64GB internal storage, enhanced audio'
  },
  {
    id: 5,
    name: 'Canon EOS R6 Mark II',
    price: 2499.99,
    description: '24.2MP Full-frame CMOS, 4K video, 12fps continuous shooting'
  },
  {
    id: 6,
    name: 'Dyson V15 Detect',
    price: 699.99,
    description: 'Laser dust detection, 60-minute runtime, HEPA filtration'
  }
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