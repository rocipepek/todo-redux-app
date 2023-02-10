import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const filtro = createAction('[Filtro] Set Filtro', props<{ filtro: filtrosValidos }>());