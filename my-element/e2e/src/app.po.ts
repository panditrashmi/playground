import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('body > app-root > div.content > app-weather > div > div > div:nth-child(1) > h3')).getText() as Promise<string>;
  }
}
