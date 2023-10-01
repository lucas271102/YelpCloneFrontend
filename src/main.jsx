import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import { RouterProvider } from 'react-router-dom';
import routes from './router/router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <RouterProvider router={routes}/>
  </NextUIProvider>,
)
