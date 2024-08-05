import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtCardComponent } from '../thought-card/thought-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [RouterLink, ThoughtCardComponent, NgFor, NgIf],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css',
})
export class ListThoughtsComponent {
  listThought = [
    {
      id: '1',
      conteudo: 'excel avançado',
      autoria: 'hastag treinamentos',
      modelo: 'modelo2',
    },
    {
      id: '2',
      conteudo: 'Power BI',
      autoria: 'hastag treinamentos',
      modelo: 'modelo3',
    },
  ];
}
