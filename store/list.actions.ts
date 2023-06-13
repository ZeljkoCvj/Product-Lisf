import { Action } from "@ngrx/store";
import { Product } from "../models/product";
export const AddNewProduct = "AddNewProduct";
export class AddnProject implements Action {
  readonly type = AddNewProduct;
  payload!: Product;
}
