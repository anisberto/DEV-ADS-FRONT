import { Component, OnInit } from '@angular/core';
import { ContatosComponent } from 'src/app/agenda/contatos/contatos.component';

@Component({
  selector: 'ads-heade',
  templateUrl: './heade.component.html',
  styleUrls: ['./heade.component.css']
})
export class HeadeComponent implements OnInit {
  contatos: any = [
    {nome:"Jhonatan",fone:"62 9 9294-7507",email:"jhon@gmail.com",estudo:"Angular"},
    {nome:"Miguel",fone:"62 9 9294-7507",email:"miguel@gmail.com",estudo:"Java"},
    {nome:"Gustavo",fone:"62 9 9294-7507",email:"gustavo@gmail.com",estudo:"Spring MVC"},
    {nome:"anisberto",fone:"62 9 9294-7507",email:"anisbertoos@gmail.com",estudo:"Angular"},
    {nome:"Jhonatan",fone:"62 9 9294-7507",email:"jhon@gmail.com",estudo:"HTML"},
    {nome:"Miguel",fone:"62 9 9294-7507",email:"miguel@gmail.com",estudo:"CSS"},
    {nome:"Yuri",fone:"62 9 9294-7507",email:"miguel@gmail.com",estudo:"CSS"},
    {nome:"Gustavo",fone:"62 9 9294-7507",email:"gustavo@gmail.com",estudo:"TYPSCRIPT"},
    {nome:"anisberto",fone:"62 9 9294-7507",email:"anisbertoos@gmail.com",estudo:"BOOTSTRAP"}
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
