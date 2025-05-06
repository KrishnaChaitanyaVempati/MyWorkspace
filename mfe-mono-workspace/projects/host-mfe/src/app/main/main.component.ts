import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared-service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {

    this.router.navigate(['/homePage/home']);
  }

  public counter = 0;
  isTodoList: boolean = false;
  

  sendDataToMFE2() {
    const event = new CustomEvent('event', { detail: this.counter += 1 });
    dispatchEvent(event);
  }

  resetDataToMFE2() {
    const event = new CustomEvent('event', { detail: this.counter = 0 });
    dispatchEvent(event);
  }

  onTodoList() {
    this.isTodoList = true;
  }

  logout(){
    this.authService.logout();
    // this.router.navigate(['/homeLogin']);
    this.router.navigate(['/homeLogin/login']);
  }
}
