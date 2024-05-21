/* eslint-disable linebreak-style */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './routes/NewPost.jsx';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.jsx';
import App from './App.jsx';
import React from 'react';
import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewPost />
      }
    ]
  }
]);

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
