import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  username: string | null='';
  email: string='';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.updateUsername();
    this.getEmail();
  }

  updateUsername():void{
    this.username = localStorage.getItem('username');
  }


  async getEmail():Promise<void>{
    this.email = await this.loginService.getUserEmailByUsername(this.username!);

  }


}
