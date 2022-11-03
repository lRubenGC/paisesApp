import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {
    this.regionActiva = region;
    this.paisService.getRegion( region ).subscribe({
      next: (paises) => this.paises = paises,
      error: (err) => {
        console.log(err);
        this.paises = [];
      }
    })
  }

}
