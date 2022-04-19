import { Component} from '@angular/core';
import { User } from 'src/app/mocks/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  usuario = new User(1,"","");

  
}
