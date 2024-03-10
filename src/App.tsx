import { BrowserRouter } from "react-router-dom";

import { Loading } from "./components/Loading/Loading";
import { AuthRouters } from "./router/AuthRouter";

export default function App() {
  return (
    <>
      <Loading />
      <BrowserRouter>
        <AuthRouters />
      </BrowserRouter>
    </>
  );
}
