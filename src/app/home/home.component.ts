import { Component, ViewChild,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("imie") imie?: ElementRef;
  @ViewChild("lista") lista?:ElementRef;
  constructor(private render:Renderer2){

  }
  
getData(){
let elementlist = this.render.createElement("li");
this.render.addClass(elementlist,"list-group-item");
let czas = new Date().toLocaleTimeString()
elementlist.innerHTML=`${this.imie?.nativeElement.value}<br>${czas}`;
this.render.appendChild(this.lista?.nativeElement,elementlist);

}
showAlert(){
  alert("to jest alert")
  
}
}
