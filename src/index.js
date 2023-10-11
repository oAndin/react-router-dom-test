import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './routes/Contact';
import Home from './routes/Home';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Error from './routes/Error';
import ContactDetails from './routes/ContactDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  },
  // nested routes ou dynamic routes
  {
    path:'contacts/:id',
    element:<ContactDetails/>
  },
  // navigate p páginas não existentes
  {
    path:'oldcontact',
    element:<Navigate to='/contact'/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
