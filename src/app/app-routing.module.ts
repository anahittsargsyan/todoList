import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { TodoListComponent } from './todo-list/todo-list.component';



const routes: Routes = [
  {path: 'todolist', component: TodoListComponent},
  {path: 'active', component: ActiveComponent},
  {path: 'completed', component: CompletedComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoListComponent, ActiveComponent, CompletedComponent]
