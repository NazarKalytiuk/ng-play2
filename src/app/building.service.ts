import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  building: Observable<String>;


  constructor() {
  }

  getBuildings() {
    return this.building
  }
}
