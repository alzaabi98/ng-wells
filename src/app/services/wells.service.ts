import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Well } from '../models/Well';

@Injectable({
  providedIn: 'root'
})
export class WellsService {

  constructor(private http:  HttpClient) { }

  allWells() : Observable<Well[]> {

     // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const headers = new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    });

    return this.http.get<Well[]>('http://ng-api.test/api/wells')
  }

    getWell(id : number) : Observable<Well> {
    return this.http.get<Well>('http://ng-api.test/api/wells/' + id)
  }

    changeStaus(id: number)  :Observable<Well[]>  {
    return this.http.patch<Well[]>('http://ng-api.test/api/valves/' + id, {})
  }
}
