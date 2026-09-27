import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import HubApp from './hub/HubApp.tsx';
import './index.css';

const path = window.location.pathname.replace(/\/$/, '') || '/';
const Root = path === '/hub' || path === '/backend' ? HubApp : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
