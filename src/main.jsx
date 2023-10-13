import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// npm create vite@latest name-of-your-project -- --template react
// npm install react-router-dom localforage match-sorter sort-by

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);