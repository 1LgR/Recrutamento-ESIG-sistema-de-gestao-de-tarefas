import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})
export class ListarTarefasComponent implements OnInit{
  public data: any;
  constructor(private http: HttpClient) { }

  // public Filtrar: any = {
  //   status: '',
  // };


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

  // public filtrarTarefa() {
  //   this.http.post('http://localhost:8080/tarefa/filtrar', this.Filtrar)
  //     .subscribe((resp: any) => {
  //       console.log(resp);
  //       this.data = resp;
  //     });
  // }

  public deleteTarefa(id: number) {
    this.http.delete(`http://localhost:8080/tarefa/deletar/${id}`)
      .subscribe(() => {
        this.getTarefas();
      });
  }

  public concluirTarefa(id: number) {
    this.http.put(`http://localhost:8080/tarefa/concluir/${id}`, "Concluir")
      .subscribe(() => {
        this.getTarefas();
      });
  }


}



