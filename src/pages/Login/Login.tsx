import Logo from "@assets/logo.png";
import { Link } from "react-router-dom";

import { HomeLayer } from "@/components/Layer/HomeLayer";
import { RouterEnum } from "@/router/enum/routerEnum";

import { LoginForm } from "./form/loginForm";

const Login = () => {
  const classLine = "divide-y-2 h-[2px] w-1/2 bg-coolGray-300";
  return (
    <HomeLayer>
      <div className="flex min-h-screen flex-col w-96 justify-center">
        <h1 className="text-4xl text-coolGray-900">Olá! 👋</h1>
        <h2 className="text-blueGray-700 text-xl w-72 leading-8 mb-8 mt-4">
          Faça login para começar a gerenciar seus produtos.
        </h2>
        <LoginForm />
        <div className="flex w-full items-center gap-x-2 justify-center mt-10">
          <span className={classLine} />
          Ou
          <span className={classLine} />
        </div>
        <p className="mt-12 self-center mb-16">
          Não possui conta?{" "}
          <Link className="text-indigo-600" to={RouterEnum.REGISTER_USER}>
            Cadastra-se
          </Link>
        </p>
        <img alt="logo" src={Logo} className="w-44 h-14 mt-10 self-center" />
      </div>
    </HomeLayer>
  );
};

export default Login;
