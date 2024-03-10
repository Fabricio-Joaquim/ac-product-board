import { FormProvider } from "react-hook-form";

import { Button } from "@/components/Button";
import { InputDefault } from "@/components/Input/InputDefault";

import { useRegisterForm } from "../hooks/useRegisterForm";

export const RegisterForm = () => {
  const { formProvider, handleSubmit } = useRegisterForm();

  return (
    <FormProvider {...formProvider}>
      <form onSubmit={handleSubmit}>
        <InputDefault name="name" label="Nome" />
        <InputDefault name="email" label="Email" />
        <InputDefault name="password" label="Senha" />
        <InputDefault name="confirmPassword" label="Confirmação de Senha" />
        <Button.Root type="submit" title="Cadastrar"></Button.Root>
      </form>
    </FormProvider>
  );
};
