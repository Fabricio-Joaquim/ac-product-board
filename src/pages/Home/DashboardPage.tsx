import TableGeneric from "@components/Table/table";

import { Button } from "@/components/Button/Button";
import { CardHome } from "@/components/CardHome";

import { useDashboard } from "./hook/useDashboard";

const DashboardPage = () => {
  const { headers, data, handlerRedirect } = useDashboard();

  return (
    <main className="px-16 py-10">
      <CardHome.Root>
        <CardHome.Header title="Olá Usuário!" subtitle="Seja bem-vindo!" />
        <Button
          title="+ Novo Produto"
          className="w-40 p-3 text-sm font-semibold"
          onClick={handlerRedirect}
        />
      </CardHome.Root>
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-2xl leading-[64px] text-trueGray-800">
          Seus Cadastros
        </h1>
        <div className="flex items-center  bg-white rounded-lg shadow-md py-3 px-5 justify-center gap-x-2">
          <strong className="font-black">31</strong> Total de cadastros
          <p className="font-normal text-xs text-trueGray-500"></p>
        </div>
      </div>
      <TableGeneric data={data} headers={headers} />
    </main>
  );
};

export default DashboardPage;
