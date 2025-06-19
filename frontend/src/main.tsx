import "./styles/index.css";
import "sonner";
import { Toaster } from "sonner";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router/Routes";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster richColors position="top-center" />
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
