import { Component } from '@angular/core';
import { PoFieldModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { TarefaComponent } from '../../components/tarefa/tarefa.component';
import { CommonModule } from '@angular/common';
import { TarefaModel } from '../../models/tarefa.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PoFieldModule, TarefaComponent, CommonModule, PoPageModule, PoWidgetModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tarefas: TarefaModel[] = [
    {
      id: 1,
      titulo: "Reunião de alinhamento",
      data: new Date("04/20/2024"),
      ativo: true,
      concluida: true
    },
    {
      id: 2,
      titulo: "Aula de inglês",
      data: new Date("08/04/2024"),
      ativo: false
    },
    {
      id: 3,
      titulo: "Churrasco",
      data: new Date("04/06/2024"),
      ativo: true
    }
  ];

  excluir(id:number) {

    this.tarefas = this.tarefas.filter(tarefa => tarefa.id != id);

  }

}
