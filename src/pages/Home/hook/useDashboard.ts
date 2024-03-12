import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { KeyServiceEnum } from "@/enums/KeyServiceEnum";
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

  const { data } = useQuery({
    queryKey: [KeyServiceEnum.PRODUCTS],
    queryFn: () => apiService.get("/products"),
  });

  return {
    headers,
    data: data?.data || [],
    handlerRedirect,
  };
};
