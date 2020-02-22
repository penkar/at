import setUpApplication from './shared';

test('Renders the "Not the WaPo" application', () => {
  const { getByText } = setUpApplication({ url: '' });

  expect(getByText(/Not the Washington Post/)).toBeInTheDocument();
});

test('Should contain the nine teasers articles, and no main articles.', () => {
  const { getAllByTestId } = setUpApplication({ url: '' });
  const teasers = getAllByTestId('teaser-article');

  expect(teasers).toHaveLength(9);
  teasers.forEach((element) => expect(element).toBeInTheDocument());
});

test('Should contain one main article and no teasers.', () => {
  const { getAllByTestId } = setUpApplication({ url: '/article/0002' });
  const mainArticle = getAllByTestId('main-article');

  expect(mainArticle).toHaveLength(1);
});

test('Should contain four teaser articles when looking through a section.', () => {
  const { getAllByTestId } = setUpApplication({ url: '/section/politics' });
  const teasers = getAllByTestId('teaser-article');

  expect(teasers).toHaveLength(4);
  teasers.forEach((element) => expect(element).toBeInTheDocument());
});
