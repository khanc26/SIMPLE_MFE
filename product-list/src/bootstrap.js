import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductList from './components/ProductList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductList />
  </StrictMode>
); 