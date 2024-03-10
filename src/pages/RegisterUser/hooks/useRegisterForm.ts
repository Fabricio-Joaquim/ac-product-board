import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";

import { RegisterModel } from "../model/RegisterModel";
import { registerSchema } from "../schema/registerSchema";

export const useRegisterForm = () => {
  const formProvider = useForm<RegisterModel>({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: RegisterModel) =>
      apiService.post("/auth/register", data),
    onSuccess: () => {
      toast.success("Usuário cadastrado com sucesso", { type: "success" });
      navigate(RouterEnum.LOGIN);
    },
  });

  const newHandlerSubmit = (data: RegisterModel) => {
    mutation.mutate(data);
  };

  return {
    handleSubmit: formProvider.handleSubmit(newHandlerSubmit),
    formProvider,
  };
};
