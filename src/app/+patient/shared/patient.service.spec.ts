import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PatientService } from './patient.service';

describe('Patient Service', () => {
  beforeEachProviders(() => [PatientService]);

  it('should ...',
      inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
