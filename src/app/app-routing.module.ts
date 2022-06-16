import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './components/crud/crud.component';
import { loginGuard } from './guards/loginGuard';
import{ AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: LoginComponent ,},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'crud', component: CrudComponent, canActivate:[AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'add', component: AddComponent, canActivate:[AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'edit/:id', component: EditComponent, canActivate:[AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
