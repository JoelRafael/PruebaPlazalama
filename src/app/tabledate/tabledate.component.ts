import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledate',
  templateUrl: './tabledate.component.html',
  styleUrls: ['./tabledate.component.css']
})
export class TabledateComponent implements OnInit {
mensaje:any[]=[
  {nombre:'Joel Rafael ', apellido:'Paredes Brioso', edad:23, fnacimiento:'21/09/1997',
lnacimiento:'Santo Domingo', cedula:"402-3504007-4", pai:'Republica Dominicana', 
padre:'Rafael Maria de la Cruz', madre:'Neris Maribel Brioso'},
{nombre:'Joel Rafael ', apellido:'Paredes Brioso', edad:23, fnacimiento:'21/09/1997',
lnacimiento:'Santo Domingo', cedula:"402-3504007-4", pai:'Republica Dominicana', 
padre:'Rafael Maria de la Cruz', madre:'Neris Maribel Brioso'},
{nombre:'Joel Rafael ', apellido:'Paredes Brioso', edad:23, fnacimiento:'21/09/1997',
lnacimiento:'Santo Domingo', cedula:"402-3504007-4", pai:'Republica Dominicana', 
padre:'Rafael Maria de la Cruz', madre:'Neris Maribel Brioso'},
{nombre:'Joel Rafael ', apellido:'Paredes Brioso', edad:23, fnacimiento:'21/09/1997',
lnacimiento:'Santo Domingo', cedula:"402-3504007-4", pai:'Republica Dominicana', 
padre:'Rafael Maria de la Cruz', madre:'Neris Maribel Brioso'},
{nombre:'Joel Rafael ', apellido:'Paredes Brioso', edad:23, fnacimiento:'21/09/1997',
lnacimiento:'Santo Domingo', cedula:"402-3504007-4", pai:'Republica Dominicana', 
padre:'Rafael Maria de la Cruz', madre:'Neris Maribel Brioso'},
{nombre:'Joel Rafael ', apellido:'Paredes Brioso', edad:23, fnacimiento:'21/09/1997',
lnacimiento:'Santo Domingo', cedula:"402-3504007-4", pai:'Republica Dominicana', 
padre:'Rafael Maria de la Cruz', madre:'Neris Maribel Brioso'},
];

  constructor() { }

  
  ngOnInit(): void {
  }

}
