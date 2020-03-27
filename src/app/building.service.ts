import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  building: Observable<String>;


  constructor(
    private http: HttpClient
  ) {
  }

  getBuildings(id: String) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
