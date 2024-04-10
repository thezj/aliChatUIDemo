import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import './index.less';
import '../UIsrc/styles/index.less';

console.log("===routerConfig====", routerConfig)
const router = createBrowserRouter(routerConfig);
console.log("===router changed to historyRouter====", router)

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
