import { LoginModel } from "@/pages/Login/model/loginModel";

export interface RegisterModel extends LoginModel {
  name: string;
  confirmPassword: string;
}
