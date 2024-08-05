import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought-card',
  standalone: true,
  imports: [],
  templateUrl: './thought-card.component.html',
  styleUrl: './thought-card.component.css',
})
export class ThoughtCardComponent {
  @Input() thought = {
    id: '1',
    conteudo: 'eu estou aprendendo angular',
    autoria: 'Pedro',
    modelo: 'modelo1',
  };
}
