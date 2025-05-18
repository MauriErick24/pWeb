import { createRoot } from "react-dom/client";
import Routes from "./router/Routes";
import "./styles/index.css";
import "sonner";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors position="top-center" />
    <Routes />
  </>
);
