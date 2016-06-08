//Exeternal
import { Component, OnInit } from '@angular/core';

//Material Imports
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';

@Component({
  moduleId: module.id,
  selector: 'patient-demographics',
  templateUrl: 'patient-demographics.component.html',
  styleUrls: ['patient-demographics.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdInput, MdRadioButton, MdRadioGroup],
  providers: [MdRadioDispatcher]
})
export class PatientDemographicsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
