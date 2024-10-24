import { Component } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter.component";

@Component({
  selector: 'app-task-list', 
  standalone: true,
  imports: [TaskFilterComponent], //O seletor do componente do "task-filter" deve ser colocado aqui para possibilitar a utilização do componente no html.
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
