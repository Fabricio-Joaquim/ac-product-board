import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { apiService } from "@/service/base";
import { useUser } from "@/store/hook/useUser";

import { LoginModel } from "../model/loginModel";
import { loginSchema } from "../schema/loginSchema";

export const useLoginForm = () => {
  const { login } = useUser();

  const formProvider = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginModel) => {
    apiService
      .post("/auth/login", data)
      .then(res => login(res.data))
      .catch(() =>
        toast("Erro ao fazer login, tente novamente.", { type: "error" }),
      );
  };
  return {
    formProvider,
    onSubmit: formProvider.handleSubmit(onSubmit),
  };
};
