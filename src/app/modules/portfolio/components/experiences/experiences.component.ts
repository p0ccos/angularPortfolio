import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
public arrayExperiences = signal<IExperiences[]>([
  {
    summary: {
      strong: 'Trabalhadora Agropecuária',
      p: 'Real Mudas | Ago 2022 - Mar 2023',
    },
    text: `<p>Atuei em atividades agropecuárias gerais, contribuindo com dedicação e eficiência para o cultivo e manejo de mudas na empresa Real Mudas. Desenvolvi habilidades práticas em ambiente rural e trabalhei em equipe para alcançar metas de produção.</p>`,
  },
  {
    summary: {
      strong: 'Motorista Particular',
      p: 'Autônoma',
    },
    text: `<p>Prestei serviços como motorista particular, realizando transporte de passageiros com segurança e responsabilidade. Atendi clientes com pontualidade e cordialidade, prezando sempre pelo bem-estar durante os trajetos.</p>`,
  },
  {
    summary: {
      strong: 'Ajudante em Construção Civil (Diversas Funções)',
      p: 'Experiência informal',
    },
    text: `<p>Possuo noções básicas em construção civil, atuando como ajudante de pedreiro, azulejista e pintor. Também desempenhei atividades relacionadas a instalações elétricas e hidráulicas, adquirindo conhecimentos práticos em manutenção predial e acabamento.</p>`,
  },
]);
}
