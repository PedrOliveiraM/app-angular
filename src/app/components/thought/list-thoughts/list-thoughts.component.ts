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
    {
      id: '3',
      conteudo: `Commercial License Usage
** Licensees holding valid commercial Qt licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and The Qt Company. For licensing terms
`,
      autoria: 'Tester',
      modelo: 'modelo1',
    },
  ];
}
