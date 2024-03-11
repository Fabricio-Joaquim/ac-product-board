import { ActionColumnRender } from "./ActionColumnRender";
import { DataColumnRender } from "./DataColumnRender";
import { PriceColumnRender } from "./PriceColumnRender";

export const columnsRender = {
  createdAt: DataColumnRender,
  price: PriceColumnRender,
  actions: ActionColumnRender,
};
