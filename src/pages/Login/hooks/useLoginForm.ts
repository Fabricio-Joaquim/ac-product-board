import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useToast } from "@/hooks/toast/useToast";
import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";
import { useUser } from "@/store/hook/useUser";

import { LoginModel, LoginResponse } from "../model/loginModel";
import { loginSchema } from "../schema/loginSchema";

export const useLoginForm = () => {
  const { login } = useUser();
  const { toast } = useToast();
  const navigate = useNavigate();

  const formProvider = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginModel) => {
    apiService
      .post<LoginResponse>("/auth/login", data)
      .then(({ data }) => {
        login(data.access_token);
        navigate(RouterEnum.DASHBOARD);
      })
      .catch(() => toast("Usuário ou senha inválidos", "error"));
  };
  return {
    formProvider,
    onSubmit: formProvider.handleSubmit(onSubmit),
  };
};
