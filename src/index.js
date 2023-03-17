import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Form from './routes/userForm'
import Finalizacao from './routes/Finalizacao'
import store from './redux/store';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import ProductCard from './components/productCard';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
},
{
  path: "finalizacao",
  element: <Finalizacao />,
}

])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
