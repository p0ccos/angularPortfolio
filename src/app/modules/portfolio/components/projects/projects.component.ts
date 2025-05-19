import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/1.jpg',
      alt: 'Projeto ECOP11',
      title: 'ECOP11',
      width: '100px',
      height: '60px',
      description:
        '<p>Conjunto de exercícios e arquivos em linguagem C desenvolvidos na disciplina ECOP11. Inclui estruturas, ponteiros e manipulação de arquivos.</p>',
      links: [
        {
          name: 'Ver no OnlineGDB',
          href: 'https://onlinegdb.com/YXPe5wiz0u',
        },
      ],
    },
    {
      src: 'assets/img/projects/10.jpg',
      alt: 'Projeto ECOT02A',
      title: 'ECOT02A',
      width: '100px',
      height: '60px',
      description:
        '<p>Pacote com diversos arquivos desenvolvidos em Java para a disciplina ECOT02A, incluindo conceitos de orientação a objetos, estruturas de dados e algoritmos.</p>',
      links: [
        {
          name: 'Download .zip',
          href: 'assets/projects/Java/Arquivos em java.zip',
        },
      ],
    },
    {
      src: 'assets/img/projects/7.jpg',
      alt: 'Projeto em LaTeX',
      title: 'Projeto ELTA01A (LaTeX)',
      width: '100px',
      height: '60px',
      description:
        '<p>Documento elaborado em LaTeX sobre o projeto da disciplina ELTA01A, utilizando Overleaf. Envolve modelagem de sistemas e documentação acadêmica.</p>',
      links: [
        {
          name: 'Abrir no Overleaf',
          href: 'https://www.overleaf.com/read/mffvfhmmdtzg#278fc9',
        },
      ],
    },
    {
      src: 'assets/img/projects/4.jpg',
      alt: 'Planilha Excel de Taxas',
      title: 'Taxas de Maquininha',
      width: '100px',
      height: '60px',
      description:
        '<p>Planilha desenvolvida em Excel para calcular e comparar taxas de máquinas de cartão, ajudando na tomada de decisão financeira.</p>',
      links: [
        {
          name: 'Baixar Planilha',
          href: 'assets/project/Excel/Cartoes.xlsx',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
