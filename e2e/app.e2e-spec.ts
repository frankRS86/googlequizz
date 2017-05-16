import { GooglequizzPage } from './app.po';

describe('googlequizz App', function() {
  let page: GooglequizzPage;

  beforeEach(() => {
    page = new GooglequizzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
