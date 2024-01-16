import { createReducer, on } from "@ngrx/store";
import { setPage } from "./actions";

export interface initialState {
  page: number;
}
const initialState:initialState = {
   page: 0,
}
export const componentReducer = createReducer(
  initialState,
on(setPage, (state)=>({
    ...state,
     page: state.page + 1
}))
)