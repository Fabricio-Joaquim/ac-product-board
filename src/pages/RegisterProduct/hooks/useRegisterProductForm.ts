import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";

import { RegisterProductModel } from "../model/registerProductModel";
import { productRegisterSchema } from "../schema/productSchema";

export const useRegisterProductForm = () => {
  const navigate = useNavigate();
  const productForm: RegisterProductModel = useLocation().state;
  console.log(productForm);

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
        productForm?.id
          ? "Produto atualizado com sucesso"
          : "Produto cadastrado com sucesso",
        { type: "success" },
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
