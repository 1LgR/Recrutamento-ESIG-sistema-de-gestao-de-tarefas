package esig.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esig.dto.TarefaDto;
import esig.models.Tarefa;
import esig.repository.TarefaRepository;


@Service
public class TarefaService {
    @Autowired
    TarefaRepository tarefaRepository;
    public String criarTarefa(TarefaDto body) {
        Tarefa tarefa = new Tarefa(body.getTitulo(), body.getDescricao(), body.getResponsavel(), body.getPrioridade(), body.getDeadline(), body.getStatus());
        this.tarefaRepository.save(tarefa);
        return ("Tarefa criada com sucesso!");
    }

    public List<Tarefa> listarTarefas() {
        List<Tarefa> tarefas = this.tarefaRepository.findAll();
        return (tarefas);
    }

    public Tarefa obterTarefaPorId(Long id) {
        return tarefaRepository.findById(id).orElse(null);
    }

    public String deletarTarefaPorId(Long id) {
        this.tarefaRepository.deleteById(id);
        return "Tarefa deletada com sucesso!";
    }

    public String concluirTarefa(Long id) {
        Tarefa tarefa = this.tarefaRepository.findById(id).get();
        if (tarefa == null) {
            return "Tarefa não encontrada!";
        }

        tarefa.setStatus("Concluída");

        this.tarefaRepository.save(tarefa);
        return "Tarefa concluída com sucesso!";
    }

    public String editarTarefa(Long id, TarefaDto body) {
        Tarefa tarefa = this.tarefaRepository.findById(id).get();
        if (tarefa == null) {
            return "Tarefa não encontrada!";
        }

        if (body.getTitulo() != null) {
            tarefa.setTitulo(body.getTitulo());
        }

        if (body.getDescricao() != null) {
            tarefa.setDescricao(body.getDescricao());
        }

        if (body.getResponsavel() != null) {
            tarefa.setResponsavel(body.getResponsavel());
        }

        if (body.getPrioridade() != null) {
            tarefa.setPrioridade(body.getPrioridade());
        }

        if (body.getDeadline() != null) {
            tarefa.setDeadline(body.getDeadline());
        }

        this.tarefaRepository.save(tarefa);
        return "Tarefa editada com sucesso!";
    }
}


