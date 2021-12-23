import { HomeServiceService } from './home-service.service';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor(private http: HttpClient) { }

  getPokeData(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=' +
      HomeServiceService.data.pageSize + '&offset=' + HomeServiceService.data.pageSize *
      HomeServiceService.data.pageIndex);
  }
  getDetails(url) {
    return this.http.get(url);
  }
  getAllPokedata(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0');
  }
  getAllTypes(){
    return this.http.get('https://pokeapi.co/api/v2/type');
  }
}
