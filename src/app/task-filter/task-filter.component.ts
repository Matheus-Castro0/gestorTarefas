import { Component } from '@angular/core';

@Component({
  selector: 'app-task-filter', //O seletor é usado na importação de um componente para o outro. Esse código vai para os "imports[aqui]" do componente pai que irá puxa-lo.
  standalone: true,
  imports: [],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {

}
