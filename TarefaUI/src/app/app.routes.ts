import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefaComponent } from './tarefa/tarefa.component';

export const routes: Routes = [
  { path: '',
  component: HomeComponent },
  { path: 'criar',
  component: CriarTarefaComponent },
  {
    path: 'listar',
    component: ListarTarefasComponent
  },

  {
    path: 'editar/:id',
    component: EditarTarefaComponent
  },

  {
    path: 'exibir/:id',
    component: TarefaComponent
  }
];
