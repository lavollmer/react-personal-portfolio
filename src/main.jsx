// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// // Bringing in the required imports from 'react-router-dom' to set up application routing behavior
// import { BrowserRouter, RouterProvider } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const router = BrowserRouter();

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </BrowserRouter>
// );

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

//takes App and injects into index.html page at the "root" ID
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
