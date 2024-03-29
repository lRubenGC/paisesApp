import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  private apiUrlv2: string = "https://restcountries.com/v2";

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl }/capital/${ termino }`;
    
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    
    const url = `${ this.apiUrl }/alpha/${ id }`;
    
    return this.http.get<Country>(url);
  }

  getRegion( region: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrlv2 }/regionalbloc/${ region }?fields&=name,capital,population`;
    
    return this.http.get<Country[]>(url);
  }

}
