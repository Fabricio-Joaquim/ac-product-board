import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { useToast } from "@/hooks/toast/useToast";
import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";

import { RegisterProductModel } from "../model/registerProductModel";
import { productRegisterSchema } from "../schema/productSchema";

export const useRegisterProductForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const productForm: RegisterProductModel = useLocation().state;

  const formProvider = useForm<RegisterProductModel>({
    resolver: yupResolver(productRegisterSchema),
    defaultValues: productForm,
  });

  const mutation = useMutation({
    mutationFn: ([data, isUpdate]: [RegisterProductModel, boolean]) =>
      apiService[isUpdate ? "patch" : "post"](
        `/products${isUpdate ? `/${data.id}` : ""}`,
        data,
      ),
    onSuccess: () => {
      toast(
        `Produto ${productForm?.id ? "atualizado" : "cadastrado"} com sucesso!`,
        "success",
      );
      navigate(RouterEnum.DASHBOARD);
      formProvider.reset();
    },
  });

  const onSubmit = (data: RegisterProductModel) => {
    data.dtCadastro = data.dtCadastro ?? new Date().toISOString();
    mutation.mutate([data, Boolean(productForm?.id)]);
  };

  return {
    formProvider,
    onSubmit: formProvider.handleSubmit(onSubmit),
  };
};
