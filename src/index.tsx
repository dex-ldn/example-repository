import React from 'react';
import ReactDOM from 'react-dom/client';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GluestackUIProvider config={config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GluestackUIProvider>
);
