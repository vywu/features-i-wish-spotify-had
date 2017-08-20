import { FiwshFrontendPage } from './app.po';

describe('fiwsh-frontend App', () => {
  let page: FiwshFrontendPage;

  beforeEach(() => {
    page = new FiwshFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
