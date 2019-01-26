import React from 'react';
import renderer from 'react-test-renderer';
import MainFooter from './MainFooter';

it('renders correctly', () => {
  const tree = renderer
    .create(<MainFooter teams={[{ name: 'a', img: 'img1' }, { name: 'b', img: 'img2' }]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
