import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployelistComponent } from './kudvenkat-tasks/employelist/employelist.component';
import { CreateemployelistComponent } from './kudvenkat-tasks/createemployelist/createemployelist.component';

const routes:Routes=[
  {path:'employelist',component:EmployelistComponent},
  {path:'createlist', component:CreateemployelistComponent},
  {path:'', redirectTo:'employelist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
