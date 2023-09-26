import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string ="https://www.oficinadanet.com.br/media/post/47556/1400/qual-a-ordem-para-assistir-todos-os-filmes-e-series-da-marvel.jpg"
  
  @Input()
  cardTitle:string = "Nova serie anunciada"
  constructor() { }

  ngOnInit(): void {
  }

}
