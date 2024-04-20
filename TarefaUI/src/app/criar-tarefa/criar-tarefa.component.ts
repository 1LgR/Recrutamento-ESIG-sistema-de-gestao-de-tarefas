import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.css',
})
export class CriarTarefaComponent implements OnInit {
  public novaTarefa: any = {
    titulo: '',
    descricao: '',
    responsavel: '',
    prioridade: '',
    deadline: '',
    status: 'Pendente',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public criarTarefa() {
    this.http.post('http://localhost:8080/tarefa/criar', this.novaTarefa)
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }
}
