/*
RESPUESTAS PARTE 4.1:
1. ¿En qué archivo se define la interfaz Juego?
   Respuesta: En src/app/interfaces/juego.interface.ts

2. ¿Qué archivo maneja el estado global de los filtros?
   Respuesta: El servicio src/app/services/juegos-data.service.ts

3. ¿Dónde se configura el HttpClient para la aplicación?
   Respuesta: En el archivo main.ts, usando la función provideHttpClient() de Angular standalone.

RESPUESTAS PARTE 4.2:
1. ¿Por qué este proyecto NO tiene app.module.ts?
   Respuesta: Porque utiliza la arquitectura standalone de Angular, que no requiere módulos raíz.

2. ¿Qué ventaja tiene usar BehaviorSubject en el servicio de juegos?
   Respuesta: Permite mantener y emitir el estado actual de los juegos a cualquier componente que se suscriba, facilitando la reactividad y sincronización de datos en tiempo real.
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosDataService } from '../../services/juegos-data.service';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  totalJuegos: number = 0;
  juegosGratis: number = 0;
  juegosPago: number = 0;
  mejorJuego: any = null;
  promedioPrecio: number = 0;

  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.juegosService.getEstadisticas().subscribe(est => {
      this.totalJuegos = est.totalJuegos;
      this.juegosGratis = est.juegosGratis;
      this.juegosPago = est.juegosPago;
      this.mejorJuego = est.mejorRating;
      this.promedioPrecio = est.promedioPrecio;
    });
  }
}
