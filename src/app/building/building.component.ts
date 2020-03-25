import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor() {
    console.log(`new buildComponent created ${JSON.stringify(this)}`)
  }

  ngOnInit(): void {
  }

}
