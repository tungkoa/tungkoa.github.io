import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import StoreProvider, { StoreContext } from "./views/components/StoreProvider";
import './style.scss'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider>
    <App>
    </App>
  </StoreProvider>
);
