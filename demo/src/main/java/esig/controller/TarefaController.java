package esig.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import esig.dto.TarefaDto;
import esig.service.TarefaService;
import esig.models.Tarefa;

@RestController
@RequestMapping("/tarefa")
@CrossOrigin(origins = "http://localhost:4200") // Permitir solicitações CORS de http://localhost:4200
public class TarefaController {
    @Autowired
    TarefaService tarefaService;
    @PostMapping("/criar")
    public String criarTarefa(@RequestBody TarefaDto body) {
        String resposta = this.tarefaService.criarTarefa(body);
        return (resposta);
    }
    @GetMapping("/listar")
    public List<Tarefa> listarTarefas() {
        List<Tarefa> tarefas = this.tarefaService.listarTarefas();
        return (tarefas);
    }
    @GetMapping("/listar/{id}")
    public ResponseEntity<Tarefa> obterTarefaPorId(@PathVariable Long id) {
        Tarefa tarefa = tarefaService.obterTarefaPorId(id);
        if (tarefa != null) {
            return new ResponseEntity<>(tarefa, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/filtrar")
    public List<Tarefa> buscarTarefasPorStatus(@RequestBody TarefaDto body) {
        return tarefaService.buscarTarefasPorStatus(body);
    }
    @PutMapping("/editar/{id}")
    public String editarTarefa(@PathVariable Long id, @RequestBody TarefaDto body) {
        String resposta = this.tarefaService.editarTarefa(id, body);
        return (resposta);
    }
    @PutMapping("/concluir/{id}")
    public String concluirTarefa(@PathVariable Long id) {
        String resposta = this.tarefaService.concluirTarefa(id);
        return (resposta);
    }
    @DeleteMapping("/deletar/{id}")
     public String deletarTarefa(@PathVariable Long id) {
        String resposta = this.tarefaService.deletarTarefaPorId(id);
        return (resposta);
    }
    

}
