import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ComponentListService } from './component-list.service';

describe('ComponentList Service', () => {
  beforeEachProviders(() => [ComponentListService]);

  it('should ...',
      inject([ComponentListService], (service: ComponentListService) => {
    expect(service).toBeTruthy();
  }));
});
