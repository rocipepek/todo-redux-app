import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { TodoModule } from './todos/todo.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production  // Restrict extension to log-only mode// maximum stack trace frames to be stored (in case trace option was provided as true)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
