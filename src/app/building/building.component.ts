import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  hero: String = "default value";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log(`new buildComponent created ${new Date()}`)
  }

  ngOnInit(): void {
    var id1 = this.route.snapshot.paramMap.get('id');
    console.log(`taken once onNgInit -> ${id1}`);

    this.route.params.subscribe(params => {
      this.hero = params['id']
    })


    /*this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = params.get("id");
        console.log(id);
        return "some...";
      })
    )*/
  }

}
