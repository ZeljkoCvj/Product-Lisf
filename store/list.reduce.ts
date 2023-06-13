import { Action } from "@ngrx/store";
import { Product } from "../models/product";
import * as ProductListActions from "./list.actions";

export interface ProductListState {
  productArray: Product[];
}

const initialState: ProductListState = {
  productArray: [],
};

export function productListReducer(
  state: ProductListState = initialState,
  action: ProductListActions.AddnProject | Action
): ProductListState {
  switch (action.type) {
    case ProductListActions.AddNewProduct:
      if ("payload" in action) {
        return {
          ...state,
          productArray: [...state.productArray, action.payload],
        };
      }
      break;
    default:
      return state;
  }

  return state;
}
