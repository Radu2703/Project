import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[{path: '', pathMatch: 'full', redirectTo: '/login'},
 {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
 {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
 {path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)}];

@NgModule
({imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})

export class AppRoutingModule { }
