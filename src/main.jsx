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
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';
import Signup from './components/Signup/Signup.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import UserEntry from './components/UserEntry/UserEntry.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <UserEntry />,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/user/:id",
        element: <UpdateUser></UpdateUser>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);