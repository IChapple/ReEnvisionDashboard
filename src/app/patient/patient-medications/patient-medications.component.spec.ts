import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PatientMedicationsComponent } from './patient-medications.component';

describe('Component: PatientMedications', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PatientMedicationsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PatientMedicationsComponent],
      (component: PatientMedicationsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PatientMedicationsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PatientMedicationsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-patient-medications></app-patient-medications>
  `,
  directives: [PatientMedicationsComponent]
})
class PatientMedicationsComponentTestController {
}

