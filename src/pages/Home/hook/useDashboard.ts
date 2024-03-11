import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { KeyServiceEnum } from "@/enums/KeyServiceEnum";
import { RegisterProductModel } from "@/pages/RegisterProduct/model/registerProductModel";
import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";

export const useDashboard = () => {
  const navigate = useNavigate();

  const headers = [
    {
      header: "Descrição",
      accessorKey: "dsProduto",
    },
    {
      header: "Categoria",
      accessorKey: "dsCategoria",
    },
    {
      header: "Data Cadastro",
      accessorKey: "dtCadastro",
    },
    {
      header: "Cód. Produto",
      accessorKey: "cdProduto",
    },
    {
      header: "Preço",
      accessorKey: "vlProduto",
    },
    {
      header: "Ações",
      accessorKey: "actions",
      enableSorting: false,
    },
  ];

  const handlerRedirect = () => {
    navigate(RouterEnum.CREATE_PRODUCT);
  };

  const query = useQuery({
    queryKey: [KeyServiceEnum.PRODUCTS],
    queryFn: () => apiService.get("/products"),
  });

  const novo = query.data?.data.map((product: RegisterProductModel) => {
    return {
      cdProduto: product.cdProduto,
      dsCategoria: product.dsCategoria,
      dsProduto: product.dsProduto,
      qtdProduto: product.qtdProduto,
      dtCadastro: product.dtCadastro?.split("T")[0],
      vlProduto: product.vlProduto,
      id: product.id,
    };
  });

  return {
    headers,
    data: novo || [],
    handlerRedirect,
  };
};
