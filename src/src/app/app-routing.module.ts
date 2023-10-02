import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesModule } from './pages/notes/notes.module';

const routes: Routes = [
  {path: 'notes', loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
