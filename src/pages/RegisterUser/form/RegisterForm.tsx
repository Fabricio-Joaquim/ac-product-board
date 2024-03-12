import { Button } from "@components/Button/Button";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { InputDefault } from "@/components/Input/InputDefault";

import { useRegisterForm } from "../hooks/useRegisterForm";

interface SeePassword {
  password: boolean;
  confirmPassword: boolean;
}
export const RegisterForm = () => {
  const { formProvider, handleSubmit } = useRegisterForm();
  const [seePassword, setSeePassword] = useState<SeePassword>({
    password: false,
    confirmPassword: false,
  });

  const handlerSeePassword = (name: string) => {
    setSeePassword((prevState: SeePassword) => ({
      ...prevState,
      [name]: !prevState[name as keyof SeePassword],
    }));
  };

  return (
    <FormProvider {...formProvider}>
      <form className="gap-y-6 flex flex-col" onSubmit={handleSubmit}>
        <InputDefault name="name" label="Nome" />
        <InputDefault name="email" label="Email" />
        <InputDefault
          name="password"
          label="Senha"
          type={seePassword.password ? "text" : "password"}
          rightIcon={
            seePassword.password ? (
              <FaRegEyeSlash
                className="text-gray-500 cursor-pointer"
                size={24}
                onClick={() => handlerSeePassword("password")}
              />
            ) : (
              <FaRegEye
                className="text-gray-500 cursor-pointer"
                size={24}
                onClick={() => handlerSeePassword("password")}
              />
            )
          }
        />
        <InputDefault
          name="confirmPassword"
          label="Confirmação de Senha"
          type={seePassword.confirmPassword ? "text" : "password"}
          rightIcon={
            seePassword.confirmPassword ? (
              <FaRegEyeSlash
                className="text-gray-500 cursor-pointer"
                size={24}
                onClick={() => handlerSeePassword("confirmPassword")}
              />
            ) : (
              <FaRegEye
                className="text-gray-500 cursor-pointer"
                size={24}
                onClick={() => handlerSeePassword("confirmPassword")}
              />
            )
          }
        />
        <Button className="mt-5" type="submit" title="Cadastrar"></Button>
      </form>
    </FormProvider>
  );
};
