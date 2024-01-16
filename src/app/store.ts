import { createReducer, on } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { getPage, setPage } from "./actions";

export interface initialState {
  page: number;
}
const initialState:initialState = {
   page: 0,
}
export const componentReducer = createReducer(initialState, on(getPage, (state)=>({
    ...state, 
    page: state.page - 1
})),
on(setPage, (state)=>({
    ...state,
     page: state.page + 1
}))
)