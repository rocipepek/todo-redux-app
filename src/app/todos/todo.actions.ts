import { createAction, props } from '@ngrx/store';

export const crear = createAction('[TODO] Crear TODO', props<{ texto: string }>());
export const toggle = createAction('[TODO] toggle TODO', props<{ id: number }>());
export const editar = createAction('[TODO] editar TODO', props<{ texto: string, id: number }>());
export const eliminar = createAction('[TODO] eliminar TODO', props<{ id: number }>());
export const toggleAll = createAction('[TODO] toggleAll TODO', props<{ completado: boolean }>());
export const eliminarCompletados = createAction('[TODO] eliminarCompletados TODO');