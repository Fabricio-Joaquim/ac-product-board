import { CardHome } from "@/components/CardHome";

import { FormRegisterProduct } from "./form/FormRegisterProduct";

const RegisterProduct = () => {
  return (
    <section className="px-20 py-9">
      <CardHome.Root>
        <CardHome.Header title="Olá Usuário!" subtitle="Seja bem-vindo!" />
      </CardHome.Root>
      <h1 className="text-2xl font-bold mt-8">Cadastrar Produto</h1>
      <FormRegisterProduct />
    </section>
  );
};

export default RegisterProduct;
