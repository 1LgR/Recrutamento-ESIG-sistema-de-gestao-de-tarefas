import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})
export class ListarTarefasComponent implements OnInit{
  public data: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTarefas();
  }

  public getTarefas() {
    this.http.get('http://localhost:8080/tarefa/listar')
      .subscribe((resp:any) => {
        console.log(resp);
        this.data = resp;
      });
  }

  public deleteTarefa(id: number) {
    this.http.delete(`http://localhost:8080/tarefa/deletar/${id}`)
      .subscribe(() => {
        // Atualizar a lista de tarefas após a exclusão
        this.getTarefas();
      });
  }

  public concluirTarefa(id: number) {
    this.http.put(`http://localhost:8080/tarefa/concluir/${id}`, "Concluir")
      .subscribe(() => {
        // Atualizar a lista de tarefas após a exclusão
        this.getTarefas();
      });
  }

}



