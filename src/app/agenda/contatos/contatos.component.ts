import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Contato } from '../interface/contato';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'ads-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: any;

   constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.getContato().subscribe((contatosOn: Contato[])=>{
      this.contatos = contatosOn;
    })
  }
}
