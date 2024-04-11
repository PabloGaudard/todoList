import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarefaModel } from '../../models/tarefa.model';
import { PoButtonModule, PoWidgetModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, PoButtonModule, PoWidgetModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

  @Input() tarefa: TarefaModel = new TarefaModel();
  @Output() excluir = new EventEmitter<number>();

}
