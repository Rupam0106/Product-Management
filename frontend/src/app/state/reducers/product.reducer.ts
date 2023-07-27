import { createReducer } from '@ngrx/store';
import { initialState } from '../product.state';

const _productReducer = createReducer(initialState);

export function productReducers(state: any, action: any) {
  return _productReducer(state, action);
}
