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
    sessionStorage.setItem('counter', this.counter.toString());
  }

  resetDataToMFE2() {
    const event = new CustomEvent('event', { detail: this.counter = 0 });
    dispatchEvent(event);
    sessionStorage.setItem('counter', '0');
  }

  onTodoList() {
    this.isTodoList = true;
  }

  logout(){
    this.authService.logout();
    sessionStorage.setItem('counter', '0');
    
    // this.router.navigate(['/homeLogin']);
    this.router.navigate(['/homeLogin/login']);
  }
}
