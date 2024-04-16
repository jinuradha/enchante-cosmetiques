import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import MyBag from "./components/MyBag"
import { createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Provider store={appStore}><MyBag/></Provider>
  }
]);

root.render(
  <RouterProvider router={appRouter}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
