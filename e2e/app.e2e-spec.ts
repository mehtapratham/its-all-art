import { ItsAllArtPage } from './app.po';

describe('its-all-art App', function() {
  let page: ItsAllArtPage;

  beforeEach(() => {
    page = new ItsAllArtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
