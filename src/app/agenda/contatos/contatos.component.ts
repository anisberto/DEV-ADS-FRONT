import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ads-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: any = [
    {nome:"anisberto"},
    {nome:"anisberto"},
    {nome:"anisberto"},
    {nome:"anisberto"},
    {nome:"anisberto"},
    {nome:"anisberto"},
    {nome:"anisberto"},
    {nome:"anisberto"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
