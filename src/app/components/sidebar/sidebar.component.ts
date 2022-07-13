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
  username: string | null = '';
  hasFired : boolean = false;


  constructor( private loginService : LoginService, private router: Router){}

  ngOnInit(): void {
    this.updateUsername();
  }

  closeSesion(){
    this.loginService.closeSesion();
  }

  updateUsername():void{
    this.username = localStorage.getItem('username');
  }
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  myprofile():void{
    this.router.navigate(['my-profile']);
  }
}