import { FormProvider } from "react-hook-form";

import { Button } from "@/components/Button";
import { InputDefault } from "@/components/Input/InputDefault";

import { useRegisterProductForm } from "../hooks/useRegisterProductForm";

export const FormRegisterProduct = () => {
  const { formProvider, onSubmit } = useRegisterProductForm();

  return (
    <FormProvider {...formProvider}>
      <form onSubmit={onSubmit}>
        <div className="bg-white p-6 mt-9 rounded-xl pb-12">
          <p className="font-bold text-xl">Informações sobre o produto</p>
          <p className="text-blueGray-400 text-sm">
            Favor inserir as informações relativas ao produto que deseja
            cadastrar.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-6">
            <InputDefault name="dsProduto" label="Descrição" />
            <InputDefault name="dsCategoria" label="Categoria" />
            <InputDefault name="cdProduto" label="Código" />
            <InputDefault name="vlProduto" label="Valor" />
            <InputDefault name="qtdProduto" label="Quantidade" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-14 p-6 rounded-xl bg-white">
          <div className="w-9/12">
            <p className="font-bold text-xl">Confirmação</p>
            <p className="text-blueGray-400 text-sm">
              Confira os dados informados antes de cadastrar o produto
            </p>
          </div>
          <Button.Root
            title="Cadastrar"
            className="w-36 font-bold h-14"
            type="submit"
          />
        </div>
      </form>
    </FormProvider>
  );
};
