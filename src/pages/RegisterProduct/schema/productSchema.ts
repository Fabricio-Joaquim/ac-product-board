import * as yup from "yup";

export const productRegisterSchema = yup.object().shape({
  dsProduto: yup.string().required("Descrição é obrigatória"),
  dsCategoria: yup.string().required("Categoria é obrigatória"),
  cdProduto: yup.string().required("Código é obrigatório"),
  vlProduto: yup
    .number()
    .required("Valor é obrigatório")
    .typeError("Valor deve ser um número"),
  dtCadastro: yup.date().notRequired(),
  qtdProduto: yup
    .number()
    .required("Quantidade é obrigatória")
    .typeError("Quantidade deve ser um número"),
});
