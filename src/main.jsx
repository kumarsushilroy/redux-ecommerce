import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./ProdContext/Prodcontex.jsx";
import { FilterContextProvider } from "./FilterContext/Filtercontex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductProvider>
  </React.StrictMode>
);
