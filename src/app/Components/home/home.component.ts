import { Component, OnInit } from '@angular/core';
import { Prueba } from "../../Clases/prueba";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Caso1:Prueba;
  
  constructor() { }

  ngOnInit(): void {
    this.Caso1 = new Prueba(20,10);
    console.log(this.Caso1.Sumar());
    console.log(this.Caso1.Restar());
  }

  

}
