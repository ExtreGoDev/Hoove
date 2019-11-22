package com.goHealthy.resources;



import com.goHealthy.dataTransferObjects.AspiranteDTO;
import com.goHealthy.dataTransferObjects.EventoDTO;
import com.goHealthy.domain.Aspirante;
import com.goHealthy.domain.Evento;
import com.goHealthy.services.AspiranteService;
import com.goHealthy.services.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value = "/eventos")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @Autowired
    private AspiranteService aspiranteService;

    @GetMapping
    public List<Evento> getAll(){
        return eventoService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> get(@PathVariable Integer id){
        Optional<Evento> evento = eventoService.find(id);
        if (!(evento.isPresent())) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(evento.get());
    }

    @GetMapping("/page")
    public Page<Evento> page(@RequestParam(value="page",defaultValue="0")Integer page,
                             @RequestParam(value="linesPerPage",defaultValue="24")Integer linesPerPage,
                             @RequestParam(value="orderBy",defaultValue="nome")String orderBy,
                             @RequestParam(value="direction",defaultValue="ASC")String direction){
        Page<Evento> eventosPage = eventoService.findPage(page,linesPerPage,direction,orderBy);
        return eventosPage;
    }

    @PostMapping("/{id}/participate")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Evento> post(@PathVariable Integer id, @RequestBody Aspirante aspirante){
        Optional<Evento> evento = eventoService.find(id);
        if(!(evento.isPresent())) {
            return ResponseEntity.notFound().build();
        }
        else{
            Optional<Aspirante> aspiranteById=aspiranteService.find(aspirante.getId());
            if(aspiranteById.isPresent()){
                evento.get().getParticipantesEvento().add(aspiranteById.get());
                eventoService.post(evento.get());
                return ResponseEntity.ok(evento.get());
            }
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}/quit")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id,@RequestParam Integer asp_id){
        Optional<Aspirante> aspiranteById=aspiranteService.find(asp_id);
        Optional<Evento> evento = eventoService.find(id);
        if(evento.isPresent() && aspiranteById.isPresent()){
            if(aspiranteById.get().getParticipandoEventos().contains(evento.get()) && evento.get().getParticipantesEvento().contains(aspiranteById.get())){
                evento.get().getParticipantesEvento().remove(aspiranteById.get());
                eventoService.post(evento.get());
            }

        }
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Evento post(@RequestBody EventoDTO evento){
        Evento eventoParsed = new Evento(
                evento.getNome(),
                evento.getLugar(),
                evento.getCategoria(),
                evento.getStatus(),
                evento.getDataHoraInicio(),
                evento.getDuracao());
        return eventoService.post(eventoParsed);
    }
}
