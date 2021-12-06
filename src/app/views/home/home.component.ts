import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo!:string;
  public texto!:string;

  constructor() { }

  ngOnInit(): void {
    this.titulo! = 'Bem vindo a nossa loja virtual';
    this.texto! = 'Trabalhamos com diversos tipos de produtos: consoles da nova geração, consoles claasicos. a maior variedade de jogos e outros produtos'
  }

}
