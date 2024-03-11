import Logo from "@assets/logo.png";

import { HomeLayer } from "@/components/Layer/HomeLayer";

import { RegisterForm } from "./form/RegisterForm";

const RegisterPage = () => {
  return (
    <HomeLayer>
      <div className="flex min-h-screen font-poppins font-normal flex-col w-96 justify-center">
        <h1 className="text-4xl text-coolGray-900">Cadastre-se</h1>
        <h2 className="text-blueGray-700 text-xl w-80 leading-8 mb-8 mt-4">
          Preencha os campos para concluir seu cadastro
        </h2>
        <RegisterForm />
        <img alt="logo" src={Logo} className="w-44 h-14 mt-24 self-center" />
      </div>
    </HomeLayer>
  );
};

export default RegisterPage;
