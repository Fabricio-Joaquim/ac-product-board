import { InputDefault } from "@components/Input/InputDefault";
import { FormProvider } from "react-hook-form";
import { FaAddressBook } from "react-icons/fa";

import { Button } from "@/components/Button";
import { useGenericForm } from "@/hooks/Form/useGenericForm";

import { LoginModel } from "./model/loginModel";
import { loginSchema } from "./schema/loginSchema";

export const Login = () => {
  const { formProvider, onSubmit } = useGenericForm<LoginModel>(
    loginSchema,
    data => {
      console.log(data);
    },
  );

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-red-700 text-4xl">
        Faça login para começar a gerenciar seus produtos.
      </h1>
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
          <Button.Root type="submit">
            <Button.IconLeft icon={FaAddressBook} />
            asasa
          </Button.Root>
        </form>
      </FormProvider>
    </div>
  );
};
