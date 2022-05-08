import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

import { Well } from '../models/Well';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http : HttpClient) { }

  allWells() : Observable<Well[]> {
    return this.http.get<Well[]>('http://localhost:4000/wells')
  }

    updateVale(id: number)  {
    return this.http.patch('http://localhost:4000/wells/1', {
      "valves[1].status": false
    })
  }
}
