import "./main.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { persistor, store } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ToastContainer />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
