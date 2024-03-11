import { GoPlus } from "react-icons/go";

import { Button } from "../Button/Button";

export const CardHome = ({ handlerButton }: { handlerButton: () => void }) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-3xl leading-[46px] text-trueGray-800">
            Olá Usuario!
          </h1>
          <h2 className="text-trueGray-500 text-sm">Seja Bem-vindo!</h2>
        </div>
        <Button
          title="Novo Produto"
          className="w-40 px-3"
          iconLeft={<GoPlus />}
          onClick={handlerButton}
        />
      </div>
      <hr className="my-8" />
    </>
  );
};
