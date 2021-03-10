import { Component, OnInit } from '@angular/core';
import { ContatosComponent } from 'src/app/agenda/contatos/contatos.component';
import { Contato } from 'src/app/agenda/interface/contato';
import { ContatoService } from 'src/app/agenda/services/contato.service';

@Component({
  selector: 'ads-heade',
  templateUrl: './heade.component.html',
  styleUrls: ['./heade.component.css']
})
export class HeadeComponent implements OnInit {
  contatos: any;

   constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.getContato().subscribe((contatosOn: Contato[])=>{
      this.contatos = contatosOn;
    })
  }
}
