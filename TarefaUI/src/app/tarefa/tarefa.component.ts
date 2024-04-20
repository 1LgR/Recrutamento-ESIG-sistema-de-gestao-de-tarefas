import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent implements OnInit{
  public data: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    // Extrair o ID da URL usando o serviço ActivatedRoute
    const id = this.route.snapshot.params['id'];
    this.getTarefasid(id);
  }

  public getTarefasid(id: number) {
    this.http.get(`http://localhost:8080/tarefa/listar/${id}`)
      .subscribe((resp: any) => {
        console.log(resp);
        this.data = resp;
      });
  }

}
