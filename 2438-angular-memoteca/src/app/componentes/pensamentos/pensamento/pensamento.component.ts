import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Futuro Junior',
    autoria: 'Lucas Andrade',
    modelo: 'modelo 1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string { //se caso for maior ele aumenta a largura com ngclass
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
