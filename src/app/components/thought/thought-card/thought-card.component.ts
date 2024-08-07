import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought-card',
  standalone: true,
  imports: [NgClass],
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

  widthThought(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
