//External
import { Component, OnInit, DynamicComponentLoader, Injector } from '@angular/core';

//Material Components
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MdIcon } from '@angular2-material/icon';
import { MdButton }               from '@angular2-material/button';

//Local
import { ViewService } from '../services/view.service';
import { View } from '../models/view.model';
import { PatientComponent } from '../+patient/patient.component';


@Component({
  moduleId: module.id,
  selector: 'view-list',
  templateUrl: 'view-list.component.html',
  styleUrls: ['view-list.component.css'],
  directives: [MD_GRID_LIST_DIRECTIVES, MdIcon, MdButton, PatientComponent]
})
export class ViewListComponent implements OnInit {
  constructor(private viewService: ViewService) { } 

  activeViews: View[] = [];

  ngOnInit() {
    this.viewService.activeViews$.subscribe(views => this.activeViews = views)
  }

  closeView(view: View) {
    this.viewService.changeState(view);
  }

}
