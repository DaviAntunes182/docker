ng new mini-todo
cd mini-todo
ng generate component home
ng generate component about
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'sobre', component: AboutComponent }
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
 declarations: [
 AppComponent,
 HomeComponent,
 AboutComponent
 ],
 imports: [
 BrowserModule,
 FormsModule,
 AppRoutingModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
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
<h2>Minha Lista de Tarefas</h2>
<input [(ngModel)]="novaTarefa" placeholder="Digite uma tarefa" />
<button (click)="adicionarTarefa()">Adicionar</button>
<ul>
 <li *ngFor="let tarefa of tarefas; let i = index">
 {{ tarefa }}
 <button (click)="removerTarefa(i)">Remover</button>
 </li>
</ul>
<a routerLink="/sobre">Ir para Sobre</a>
import { Component } from '@angular/core';
@Component({
 selector: 'app-about',
 templateUrl: './about.component.html',
 styleUrls: ['./about.component.css']
})
export class AboutComponent { }
<h2>Sobre esta aplicação</h2>
<p>Este é um projeto Angular simples com duas páginas e uma lista de tarefas.</p>
<a routerLink="/">Voltar para Home</a>
<h1>Mini To-Do Angular</h1>
<router-outlet></router-outlet>