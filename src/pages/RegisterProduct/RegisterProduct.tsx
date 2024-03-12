import { CardHome } from "@/components/CardHome";

import { FormRegisterProduct } from "./form/FormRegisterProduct";

const RegisterProduct = () => {
  return (
    <section className="px-2 md:px-6 lg:px-20 py-2 md:py-6 lg:py-9">
      <CardHome.Root>
        <CardHome.Header title="Olá Usuário!" subtitle="Seja bem-vindo!" />
      </CardHome.Root>
      <h1 className="text-2xl font-bold mt-8">Cadastrar Produto</h1>
      <FormRegisterProduct />
    </section>
  );
};

export default RegisterProduct;
