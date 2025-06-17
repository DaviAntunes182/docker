import { Component } from '@angular/core';
@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
 tarefas: string[] = [];
 novaTarefa = '';
 adicionarTarefa() {
 if (this.novaTarefa.trim()) {
 this.tarefas.push(this.novaTarefa.trim());
 this.novaTarefa = '';
 }
 }
 removerTarefa(index: number) {
 this.tarefas.splice(index, 1);
 }
}