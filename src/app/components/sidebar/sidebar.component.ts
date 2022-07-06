import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-sidebar',
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  loggedUser!: string;
  username: string = '';
  hasFired : boolean = false;


  constructor( private loginService : LoginService, private router: Router){}

  ngOnInit(): void {
    this.updateUsername();
  }

  closeSesion(){
    this.loginService.closeSesion();
  }

  updateUsername():void{
    if(this.hasFired===false){
      console.log("entro if");
      console.log(this.hasFired);
      this.hasFired = !this.hasFired.valueOf();
      this.loggedUser = this.loginService.getUsername();
      this.username = this.loggedUser.substring(0, this.loggedUser.indexOf('@'));
    }else{
      console.log("entro else");
      console.log(this.hasFired);
    }
  }
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}