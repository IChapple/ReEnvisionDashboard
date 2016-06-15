import { Injectable } from '@angular/core';
// import { Observer, Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';


import { View } from '../models/view.model';

@Injectable()
export class ViewService {

  //TODO: Create an observable list that contains all of the currently enabled components
  //so that we can use it to control the state of the component-list.component
  activeViews$: Observable<View[]>

  private observer: Observer<View[]>;
  private active: View[] = [];

  constructor() {
    this.activeViews$ = new Observable<View[]>(observer => this.observer = observer).share();
  }

  //This function sends a new value to all objects subscribed to the observer
  changeState(view: View) {
    //if _active already contains the view then remove it, else add it
    if(this.active.filter(x => x.name === view.name)[0]){
      this.active = this.active.filter(x => x.name !== view.name);
    } else{
      this.active.push(view);
    }

    if (this.observer !== undefined) {
      this.observer.next(this.active);
    }
  }

}
