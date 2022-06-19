import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './contact/create/create.component';

const routes: Routes = [
  {path:'' , redirectTo: 'list' , pathMatch: 'full'},
  {path: 'list' , component:  ContactComponent },
  {path: 'create' , component:  CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
