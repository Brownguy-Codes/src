import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Injector } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
  }



}
export class Data{
  private name:string;
  private email: string;

  constructor(n,em) {
      this.name = n;
      this.email = em;
  }
}






