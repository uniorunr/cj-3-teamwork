import React from 'react';
import renderer from 'react-test-renderer';
import MainContent from './MainContent';
import ru from '../../../../config/ru.json';

it('renders correctly', () => {
  const tree = renderer
    .create(<MainContent index={0} lang={ru} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
