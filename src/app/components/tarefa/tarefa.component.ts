import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TarefaModel } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

  @Input() tarefa: TarefaModel = new TarefaModel();

}
