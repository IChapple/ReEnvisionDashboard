import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';

import { ComponentView } from '../models/component-view.model';

@Injectable()
export class ComponentListService {

  //TODO: Create an observable list that contains all of the currently enabled components
  //so that we can use it to control the state of the component-list.component
  componentList: Observable<ComponentView[]>;
  private observer: Observer<ComponentView[]>;

  constructor() {
    // this.componentList = new Observable(observer => 
    //   this.observer = observer
    //   ).share();
  }

  //This function sends a new value to all objects subscribed to the observer
  changeState(newState: ComponentView[]){
    if(this.observer !== undefined) this.observer.next(newState);
  }

}
