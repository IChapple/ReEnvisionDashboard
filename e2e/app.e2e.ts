import { ReEnvisionDashboardPage } from './app.po';

describe('re-envision-dashboard App', function() {
  let page: ReEnvisionDashboardPage;

  beforeEach(() => {
    page = new ReEnvisionDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('re-envision-dashboard works!');
  });
});
