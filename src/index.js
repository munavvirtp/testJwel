import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { appRouter } from './App';
import { Router, RouterProvider } from 'react-router-dom';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter} />
  </React.StrictMode>
);


