import { Button } from "@components/Button/Button";
import { FormProvider } from "react-hook-form";

import { InputDefault } from "@/components/Input/InputDefault";

import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm = () => {
  const { formProvider, onSubmit } = useLoginForm();

  return (
    <FormProvider {...formProvider}>
      <form onSubmit={onSubmit}>
        <InputDefault
          placeholder="seuemail@email.com"
          label="Email"
          name="email"
        />
        <InputDefault
          type="password"
          placeholder="Digite sua senha..."
          label="Senha"
          name="password"
        />
        <Button className="mt-6" type="submit" title="Login" />
      </form>
    </FormProvider>
  );
};
