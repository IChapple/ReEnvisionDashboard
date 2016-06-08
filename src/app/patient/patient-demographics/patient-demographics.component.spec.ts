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
import { PatientDemographicsComponent } from './patient-demographics.component';

describe('Component: PatientDemographics', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PatientDemographicsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PatientDemographicsComponent],
      (component: PatientDemographicsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PatientDemographicsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PatientDemographicsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-patient-demographics></app-patient-demographics>
  `,
  directives: [PatientDemographicsComponent]
})
class PatientDemographicsComponentTestController {
}

