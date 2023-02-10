import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, eliminar, eliminarCompletados, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
    new Todo("Estudiar Angular"),
    new Todo("Sacar al perro"),
    new Todo("Comprar comida"),
    new Todo("Ir a caminar"),
];

export const todoReducer = createReducer(
    initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return { ...todo, completado: !todo.completado }
            } else {
                return todo;
            }
        })
    }),
    on(editar, (state, { texto, id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return { ...todo, texto: texto }
            } else {
                return todo;
            }
        })
    }),
    on(eliminar, (state, { id }) => {
        return state.filter(todo => todo.id !== id
        )
    }),
    on(toggleAll, (state, { completado }) =>
        state.map(todo => { return { ...todo, completado: completado } }
        )),
    on(eliminarCompletados, (state) =>
        state.filter(todo => !todo.completado
        )),

);