import { Component } from '@angular/core';
import { PoButtonModule, PoFieldModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { TarefaComponent } from '../../components/tarefa/tarefa.component';
import { CommonModule } from '@angular/common';
import { TarefaModel } from '../../models/tarefa.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PoFieldModule, TarefaComponent, CommonModule, PoPageModule, PoWidgetModule, PoButtonModule, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  titulo: string = "";
  data: string = "";

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

  adicionar() {
    let tarefa = new TarefaModel();

    tarefa.titulo = this.titulo;
    tarefa.data = new Date(this.data);

    this.tarefas.push(tarefa);

    this.titulo = "";
    this.data = "";
  }

  get valido(): boolean{
    return this.titulo != "" && this.data != "";  
  }

}
