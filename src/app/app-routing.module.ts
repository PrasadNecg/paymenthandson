import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmittedformComponent} from './submittedform/submittedform.component';

const routes: Routes = [  
  {path:'Submittedform',component:SubmittedformComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SubmittedformComponent]

