import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { editar, toggle, eliminar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild("inputFisico") txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(() => this.store.dispatch(toggle({ id: this.todo.id })));
  }

  editar() {
    this.editando = true;

    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;

    this.store.dispatch(editar({ texto: this.txtInput.value, id: this.todo.id }));
  }

  eliminar() {
    this.store.dispatch(eliminar({ id: this.todo.id }));
  }

}
