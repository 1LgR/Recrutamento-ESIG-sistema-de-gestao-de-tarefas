package esig.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import esig.models.Tarefa;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long>{
    List<Tarefa> findByStatus(String status);
    List<Tarefa> findByTitulo(String titulo);
    List<Tarefa> findByResponsavel(String responsavel);
}
