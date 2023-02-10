import { createReducer, on } from '@ngrx/store';
import { filtro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer(
    initialState,
    on(filtro, (state, { filtro }) => filtro)
)