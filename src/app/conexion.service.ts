import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private BASE_URL = "https://www.themealdb.com/api/json/v1/1";

  constructor(
    private http: HttpClient
  ) { }

  consumirAPIrestAleatorio() {
    return this.http.get<any>(this.BASE_URL + '/random.php', {});
  }
}
