import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ads-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: any = [
    {nome:"Jhonatan",fone:"62 9 9294-7507",email:"jhon@gmail.com",estudo:"Angular"},
    {nome:"Miguel",fone:"62 9 9294-7507",email:"miguel@gmail.com",estudo:"Java"},
    {nome:"Gustavo",fone:"62 9 9294-7507",email:"gustavo@gmail.com",estudo:"Spring MVC"},
    //{nome:"anisberto",fone:"62 9 9294-7507",email:"anisbertoos@gmail.com",estudo:"Angular"},
    {nome:"Jhonatan",fone:"62 9 9294-7507",email:"jhon@gmail.com",estudo:"HTML"},
    {nome:"Miguel",fone:"62 9 9294-7507",email:"miguel@gmail.com",estudo:"CSS"},
    {nome:"Yuri",fone:"62 9 9294-7507",email:"miguel@gmail.com",estudo:"CSS"},
    {nome:"Gustavo",fone:"62 9 9294-7507",email:"gustavo@gmail.com",estudo:"TYPSCRIPT"},
    {nome:"anisberto",fone:"62 9 9294-7507",email:"anisbertoos@gmail.com",estudo:"BOOTSTRAP"}
  ];
  public acount: number = this.contatos.length;

  constructor() { }

  ngOnInit(): void {
  }
  
}
