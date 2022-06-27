import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', component: HomeComponent,
  //   children:[
  //     {path: 'header', component: HeaderComponent},
  //     {path: '**', redirectTo: 'home'}

  //   ]

  // }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
