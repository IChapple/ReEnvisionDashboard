import { Injectable } from '@angular/core';

import { Patient } from '../shared';
//this could also be done as...
//import { Patient } from './patient.model';
//but we use the shared folder for ease of importing in case we add more models here in the future

@Injectable()
export class PatientService {

  constructor() {}

}
