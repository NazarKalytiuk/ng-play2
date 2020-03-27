import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {BuildingService} from "../building.service";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  hero: String = "default value";
  task$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BuildingService
  ) {
    console.log(`new buildComponent created ${new Date()}`)
  }

  ngOnInit(): void {
    var id1 = this.route.snapshot.paramMap.get('id');
    console.log(`taken once onNgInit -> ${id1}`);

    this.route.params.subscribe(params => {
      this.hero = params['id'];

      this.service.getBuildings(params['id'])
        .subscribe(data => {
          this.hero = JSON.stringify(data)
        })
    });

    this.task$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getBuildings(params.get("id"))
      )
    )
  }

}
