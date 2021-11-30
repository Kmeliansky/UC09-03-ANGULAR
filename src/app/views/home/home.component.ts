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
    this.titulo! = 'lorem ipsum é simplesmente';
    this.texto! = 'lores ipsum é simplesmente uma simulação de texto da industria tipografica e de impressos, vem sendo utilizado desde o seculo passado'
  }

}
