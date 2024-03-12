import { Button } from "@components/Button/Button";
import { CardHome } from "@components/CardHome";
import TableGeneric from "@components/Table/table";

import { useDashboard } from "./hook/useDashboard";

const DashboardPage = () => {
  const { headers, data, handlerRedirect } = useDashboard();

  return (
    <main className="px-2 md:px-2 lg:px-16 py-4 lg:py-10">
      <CardHome.Root>
        <CardHome.Header title="Olá Usuário!" subtitle="Seja bem-vindo!" />
        <Button
          title="+ Novo Produto"
          className="w-40 p-3 text-sm font-semibold font-inter"
          onClick={handlerRedirect}
        />
      </CardHome.Root>
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-xl md:text-2xl leading-[64px] text-trueGray-800">
          Seus Cadastros
        </h1>
        <div className="flex items-center font-poppins bg-white rounded-lg shadow-md md:py-3 md:px-5 justify-center px-3 gap-x-2">
          <strong className="font-black">{data.length}</strong> Total de
          cadastros
          <p className="font-normal text-xs text-trueGray-500"></p>
        </div>
      </div>
      <TableGeneric data={data} headers={headers} />
    </main>
  );
};

export default DashboardPage;
