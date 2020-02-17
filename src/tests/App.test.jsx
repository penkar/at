import setUpApplication from './shared';

test('Renders the "Not the WaPo" application', () => {
  const { getByText } = setUpApplication({ url: '' });
  const linkElement = getByText(/Not the Washington Post/i);

  expect(linkElement).toBeInTheDocument();
});

test('Should contain the nine teasers articles, and no main articles.', () => {
  const { container } = setUpApplication({ url: '' });
  const teasers = container.querySelectorAll('[data-iden="teaser-article"]');
  const mainArticle = container.querySelectorAll('[data-iden="main-article"]');

  expect(teasers).toHaveLength(9);
  expect(mainArticle).toHaveLength(0);
  teasers.forEach((element) => expect(element).toBeInTheDocument());
});

test('Should contain one main article and no teasers.', () => {
  const { container } = setUpApplication({ url: '/article/0002' });
  const teasers = container.querySelectorAll('[data-iden="teaser-article"]');
  const mainArticle = container.querySelectorAll('[data-iden="main-article"]');

  expect(teasers).toHaveLength(0);
  expect(mainArticle).toHaveLength(1);
  teasers.forEach((element) => expect(element).toBeInTheDocument());
});
