import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: ReEnvisionDashboard', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'re-envision-dashboard works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('re-envision-dashboard works!');
  }));
});
