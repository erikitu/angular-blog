import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string ="https://assetsio.reedpopcdn.com/civil-war-still.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  @Input()
  cardTitle:string ="NOVO HOMEM DE FERRO ANUNCIADO"
  @Input()
  cardDescription:string = "Marvel anuncia o novo integrante do filme"

  constructor() { }

  ngOnInit(): void {
  }

}
