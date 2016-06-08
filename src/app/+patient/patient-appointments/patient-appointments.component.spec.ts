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
import { PatientAppointmentsComponent } from './patient-appointments.component';

describe('Component: PatientAppointments', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PatientAppointmentsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PatientAppointmentsComponent],
      (component: PatientAppointmentsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PatientAppointmentsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PatientAppointmentsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-patient-appointments></app-patient-appointments>
  `,
  directives: [PatientAppointmentsComponent]
})
class PatientAppointmentsComponentTestController {
}

