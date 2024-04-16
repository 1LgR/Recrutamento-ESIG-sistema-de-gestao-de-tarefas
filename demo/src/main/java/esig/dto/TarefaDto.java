package esig.dto;

import java.time.LocalDateTime;

public class TarefaDto {
    private String titulo;
    private String descricao;
    private String responsavel;
    private String prioridade;
    private LocalDateTime deadline;

    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public String getPrioridade() {
        return prioridade;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public void setPrioridade(String prioridade) {
        this.prioridade = prioridade;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }
    
}
