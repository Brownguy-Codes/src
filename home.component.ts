import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AppComponent, Data} from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  arr: any[]=[];
  onSubmit(form: NgForm) {

    this.arr = form.value;
    var x = JSON.stringify( this.arr);
    localStorage.setItem(this.arr['fullName'], x);
    let item = localStorage.getItem(this.arr['fullName']);
  }

}
