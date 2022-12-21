import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>,
);
