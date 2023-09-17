import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
/* import './assets/main.css'; */
import { TaskContextProvider } from './context/TaskContext.jsx'

import { ModalProvider } from 'react-modal-hook'; // Importa el ModalProvider
//import Modal from 'react-modal';

//Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TaskContextProvider>
    <React.StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>,
  </TaskContextProvider>
)
