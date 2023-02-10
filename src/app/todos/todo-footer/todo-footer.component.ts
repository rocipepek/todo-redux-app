import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtro, filtrosValidos } from 'src/app/filtro/filtro.actions';
import { eliminarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;
  hayCompletados: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro)

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length
      this.hayCompletados = state.todos.some(todo => todo.completado);
    })
  }

  cambiarFiltros(filtroSeleccionado: filtrosValidos) {
    this.store.dispatch(filtro({ filtro: filtroSeleccionado }))
  }

  eliminarCompletados() {
    this.store.dispatch(eliminarCompletados());
  }

}
