import { Component, signal } from '@angular/core';


import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/c.png',
      alt: 'Ícone de conhecimento de c',
    },
    {
      src: 'assets/icons/knowledge/c++.png',
      alt: 'Ícone de conhecimento de c++',
    },
    {
      src: 'assets/icons/knowledge/javascript.png',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/java.png',
      alt: 'Ícone de conhecimento de java',
    },
    {
      src: 'assets/icons/knowledge/python.png',
      alt: 'Ícone de conhecimento de python',
    },
  ]);
}
