import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  messageFromHost = 0;

  ngOnInit(): void {
    this.pullDataFromHost();
    fromEvent(window, 'event').subscribe((event$: any) => {
      console.log(event$);
      this.messageFromHost = event$.detail;
    });

  }

  pullDataFromHost() {
    this.messageFromHost = Number(sessionStorage.getItem('counter'));
  }


}
