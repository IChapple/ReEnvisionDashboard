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
import { PatientAllergiesComponent } from './patient-allergies.component';

describe('Component: PatientAllergies', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PatientAllergiesComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PatientAllergiesComponent],
      (component: PatientAllergiesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PatientAllergiesComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PatientAllergiesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-patient-allergies></app-patient-allergies>
  `,
  directives: [PatientAllergiesComponent]
})
class PatientAllergiesComponentTestController {
}

