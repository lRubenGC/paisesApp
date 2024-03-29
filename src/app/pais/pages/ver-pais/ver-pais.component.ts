import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ( params ) => this.paisService.getPaisPorAlpha(params['id']) ),
          tap( console.log )
        )
        .subscribe( ( pais ) => {
          this.pais = pais[0]
          console.log(this.pais)
        })
  }

}
