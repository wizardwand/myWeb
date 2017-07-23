import { ShirishProfilePage } from './app.po';

describe('shirish-profile App', function() {
  let page: ShirishProfilePage;

  beforeEach(() => {
    page = new ShirishProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
