import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.scss']
})
export class WebComponentComponent implements AfterViewInit {

  // http://localhost:4600/mfe5-webcomponent-webcomponent.js
  MFE5_APP_URL="http://localhost:4600/remoteEntry.js";
  container: any;
  ngAfterViewInit(): void {
    
    // const webComp = document.createElement("mfe5-web-app");
    // this.container = document.getElementById("loadWebComp");
    // this.container.innerHTML = "";
    // this.container.appendChild(webComp);
  }

}
