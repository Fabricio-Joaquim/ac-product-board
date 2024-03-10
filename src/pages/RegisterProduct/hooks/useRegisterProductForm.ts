import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";
import { useUser } from "@/store/hook/useUser";

import { RegisterProductModel } from "../model/registerProductModel";
import { productRegisterSchema } from "../schema/productSchema";

export const useRegisterProductForm = () => {
  const formProvider = useForm<RegisterProductModel>({
    resolver: yupResolver(productRegisterSchema),
  });

  const navigate = useNavigate();
  const { user } = useUser();
  const mutation = useMutation({
    mutationFn: (data: RegisterProductModel) =>
      apiService.post("/products", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }),
    onSuccess: () => {
      toast("Produto cadastrado com sucesso", { type: "success" });
      navigate(RouterEnum.DASHBOARD);
      formProvider.reset();
    },
  });

  const onSubmit = (data: RegisterProductModel) => {
    data.dtCadastro = new Date().toISOString();
    mutation.mutate(data);
  };

  return {
    formProvider,
    onSubmit: formProvider.handleSubmit(onSubmit),
  };
};
