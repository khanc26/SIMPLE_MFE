import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductDetail from './components/ProductDetail';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductDetail />
  </StrictMode>
); 