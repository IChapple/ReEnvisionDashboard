export class ReEnvisionDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('re-envision-dashboard-app h1')).getText();
  }
}
