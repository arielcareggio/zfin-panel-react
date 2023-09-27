import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
/* import './assets/main.css'; */
import { AppContextProvider } from './context/AppContext.tsx'
import Modal from 'react-modal';

import { ModalProvider } from 'react-modal-hook'; // Importa el ModalProvider
//import Modal from 'react-modal';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppContextProvider>
    <React.StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>,
  </AppContextProvider>
)
