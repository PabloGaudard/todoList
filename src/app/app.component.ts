import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { CommonModule } from '@angular/common';
import { TarefaModel } from './models/tarefa.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoList';

  tarefas: TarefaModel[] = [
    {
      titulo: "Reunião de alinhamento",
      data: new Date("04/20/2024"),
      ativo: true,
      concluida: true
    },
    {
      titulo: "Aula de inglês",
      data: new Date("08/04/2024"),
      ativo: false
    },
    {
      titulo: "Churrasco",
      data: new Date("04/06/2024"),
      ativo: true
    }
  ];
}
