import { Component, OnInit } from '@angular/core';
import { ConexionService} from '../conexion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private consumoService : ConexionService
  ) { }

  ngOnInit(): void {
    this.obtenerAleatorio();
  }

  obtenerAleatorio() {
    this.consumoService.consumirAPIrestAleatorio().subscribe(response => {
      if (typeof response === 'object' && response.hasOwnProperty("meals")) {
        if (Array.isArray(response.meals) && response.meals.length > 0) {
          // Aqui es donde se cocina la papa y ya validamos que la respuesta esta informada
          console.log("Datos de la API:" + JSON.stringify(response.meals));
        }
        
      }
    })
  }
}
