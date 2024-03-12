import { ActionColumnRender } from "./ActionColumnRender";
import { DataColumnRender } from "./DataColumnRender";
import { PriceColumnRender } from "./PriceColumnRender";

export const columnsRender = {
  dtCadastro: DataColumnRender,
  vlProduto: PriceColumnRender,
  actions: ActionColumnRender,
};
