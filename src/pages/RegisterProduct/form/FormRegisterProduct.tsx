import { Button } from "@components/Button/Button";
import { InputDefault } from "@components/Input/InputDefault";
import { FormProvider } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useRegisterProductForm } from "../hooks/useRegisterProductForm";

export const FormRegisterProduct = () => {
  const { formProvider, onSubmit } = useRegisterProductForm();
  const { id } = useParams();

  return (
    <FormProvider {...formProvider}>
      <form onSubmit={onSubmit}>
        <div className="bg-white p-6 mt-9 rounded-xl pb-12">
          <p className="font-bold text-xl">Informações sobre o produto</p>
          <p className="text-blueGray-400 text-sm">
            Favor inserir as informações relativas ao produto que deseja
            cadastrar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 mt-6">
            <InputDefault
              name="dsProduto"
              className="font-poppins font-semibold"
              label="Descrição"
              placeholder="Descrição do produto"
            />
            <InputDefault
              name="dsCategoria"
              className="font-poppins font-semibold"
              label="Categoria"
              placeholder="Categoria do produto"
            />
            <InputDefault
              name="cdProduto"
              className="font-poppins font-semibold"
              label="Código"
              placeholder="Código do produto"
            />
            <InputDefault
              name="vlProduto"
              className="font-poppins font-semibold"
              label="Valor"
              placeholder="Valor do produto"
            />
            <InputDefault
              name="qtdProduto"
              className="font-poppins font-semibold"
              label="Quantidade"
              placeholder="Quantidade do produto"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-14 p-6 rounded-xl bg-white">
          <div className="w-9/12">
            <p className="font-bold text-xl">Confirmação</p>
            <p className="text-blueGray-400 text-sm">
              Confira os dados informados antes de{" "}
              {id ? "atualizar" : "cadastrar"} o produto
            </p>
          </div>
          <Button
            title={id ? "Atualizar" : "Cadastrar"}
            className="w-36 font-bold h-14"
            type="submit"
          />
        </div>
      </form>
    </FormProvider>
  );
};
