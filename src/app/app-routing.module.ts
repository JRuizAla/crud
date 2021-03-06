import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './components/crud/crud.component';
import { loginGuard } from './guards/loginGuard';
import{ AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterComponent } from './components/register/register.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'crud', component: CrudComponent, canActivate:[loginGuard]},
  { path: 'add', component: AddComponent, canActivate:[loginGuard]},
  { path: 'edit/:id', component: EditComponent, canActivate:[loginGuard]},
  { path: 'my-profile', component: MyProfileComponent, canActivate:[loginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
