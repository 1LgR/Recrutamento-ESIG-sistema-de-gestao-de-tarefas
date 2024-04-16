import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css'
})
export class EditarTarefaComponent implements OnInit {
  taskId!: number;
  tarefa: any = {
    titulo: '',
    descricao: '',
    responsavel: '',
    prioridade: '',
    deadline: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
    });
  }

  editarTarefa() {
    let tarefaAtualizada: any = {};

    if (this.tarefa.titulo) {
      tarefaAtualizada.titulo = this.tarefa.titulo;
    }
    if (this.tarefa.descricao) {
      tarefaAtualizada.descricao = this.tarefa.descricao;
    }
    if (this.tarefa.responsavel) {
      tarefaAtualizada.responsavel = this.tarefa.responsavel;
    }
    if (this.tarefa.prioridade) {
      tarefaAtualizada.prioridade = this.tarefa.prioridade;
    }
    if (this.tarefa.deadline) {
      tarefaAtualizada.deadline = this.tarefa.deadline;
    }

    this.http.put(`http://localhost:8080/tarefa/editar/${this.taskId}`, tarefaAtualizada)
      .subscribe((resp: any) => {
        console.log(resp);
        // Após salvar, redirecione para a página de listar tarefas
        this.router.navigate(['/listar']);
      }, error => {
        console.error('Erro ao editar tarefa:', error);
      });
  }
}
