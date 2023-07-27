import { CounterState } from "../state/counter.state";
import { ProductState } from "../state/product.state";
import { counterReducer } from "../state/reducers/counter.reducer";
import { productReducers } from "../state/reducers/product.reducer";

export interface AppState{
    counter:CounterState,
    product:ProductState
}

export const appReducers={
    counter:counterReducer,
    product:productReducers
}