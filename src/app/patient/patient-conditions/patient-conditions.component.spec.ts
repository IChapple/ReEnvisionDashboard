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
import { PatientConditionsComponent } from './patient-conditions.component';

describe('Component: PatientConditions', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PatientConditionsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PatientConditionsComponent],
      (component: PatientConditionsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PatientConditionsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PatientConditionsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-patient-conditions></app-patient-conditions>
  `,
  directives: [PatientConditionsComponent]
})
class PatientConditionsComponentTestController {
}

