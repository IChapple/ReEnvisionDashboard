import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ViewService } from './view.service';

describe('ComponentList Service', () => {
  beforeEachProviders(() => [ViewService]);

  it('should ...',
      inject([ViewService], (service: ViewService) => {
    expect(service).toBeTruthy();
  }));
});
