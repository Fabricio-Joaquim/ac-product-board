import "./main.css";
import "sweetalert2/src/sweetalert2.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
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
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
