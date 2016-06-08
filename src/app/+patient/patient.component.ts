//external
import { Component, OnInit, Input } from '@angular/core';

//material imports
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';

//local
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientComponentStatus } from './shared/index';


@Component({
  moduleId: module.id,
  selector: 'patient-component',
  templateUrl: 'patient.component.html',
  styleUrls: ['patient.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdInput, MdRadioButton, MdRadioGroup, PatientDemographicsComponent],
  providers: [MdRadioDispatcher]
})
export class PatientComponent implements OnInit {
  constructor() { }

  @Input() status: PatientComponentStatus;
  
  ngOnInit() {
    if(!this.status) { this.status = PatientComponentStatus.Demographics }
    console.log(this.status)
  }

  changeComponentStatus(status: string) {
    this.status = PatientComponentStatus[status];
  }

}
