//External
import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

//Material Components
import { MdToolbar }              from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES }  from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES }     from '@angular2-material/list';
import { MD_CARD_DIRECTIVES }     from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton }               from '@angular2-material/button';

//Local
import { ComponentListComponent } from './component-list';

//Mock-Data
import { componentViews } from './mock-data/mock-component-views';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MdButton,
    ComponentListComponent,
  ],
  providers: [MdIconRegistry]
})
export class AppComponent {
  constructor() { }

  title = "Dox Re-Envision Dashboard";
  views = componentViews;

}
