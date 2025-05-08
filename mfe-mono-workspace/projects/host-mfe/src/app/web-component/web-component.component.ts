import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.scss']
})
export class WebComponentComponent implements OnInit, AfterViewInit {

  // http://localhost:4600/mfe5-webcomponent-webcomponent.js
  // ./assets/mfe5-webcomponent-webcomponent.js
  MFE5_APP_URL = "http://localhost:4700/assets/mfe-webcomponent-v2.js";
  container: any;
  flag = false;

  ngOnInit(): void {
    setTimeout(() => { this.flag = true; }, 2000)
  }

  ngAfterViewInit(): void {

    const webComp = document.createElement("mfe2-web-app");
    this.container = document.getElementById("loadWebComp");
    this.container.innerHTML = "";
    this.container.appendChild(webComp);
  }

}
