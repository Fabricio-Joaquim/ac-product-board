import { Button } from "@components/Button/Button";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { InputDefault } from "@/components/Input/InputDefault";

import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm = () => {
  const { formProvider, onSubmit } = useLoginForm();
  const [seePassword, setSeePassword] = useState(false);
  const handlerSeePassword = () => setSeePassword(!seePassword);

  const propsIcon = {
    className: "text-gray-500 cursor-pointer",
    size: 24,
  };

  return (
    <FormProvider {...formProvider}>
      <form onSubmit={onSubmit}>
        <InputDefault
          placeholder="seuemail@email.com"
          label="Email"
          name="email"
        />
        <InputDefault
          type={seePassword ? "text" : "password"}
          placeholder="Digite sua senha..."
          label="Senha"
          name="password"
          rightIcon={
            seePassword ? (
              <FaRegEyeSlash {...propsIcon} onClick={handlerSeePassword} />
            ) : (
              <FaRegEye {...propsIcon} onClick={handlerSeePassword} />
            )
          }
        />
        <Button className="mt-6" type="submit" title="Login" />
      </form>
    </FormProvider>
  );
};
