import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.initialNavigation();
    // this.router.navigate([{outlets:{mfeProducts:'mfe-products'}}])
  }
  title = 'mfe5-webcomponent';
}
