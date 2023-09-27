import { Component, OnInit } from '@angular/core';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  component = EjemploComponent;
  public items: any [] = [
    { id: 'DFA01158', orden: 1, name: 'Titulo Trabajo', status: 2 },
    { id: 'A01058', orden: 2, name: 'Introducción', status: 1 },
    { id: 'FA02158', orden: 3, name: 'Antecedentes', status: 0 },
    { id: 'ABBBA0158', orden: 4, name: 'Bla', status: 0 },
    { id: 'DFA01168', orden: 5, name: 'Bla bla', status: 0 },

  ]
  constructor() { }

  ngOnInit() {
  }

}
