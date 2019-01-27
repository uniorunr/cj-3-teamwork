import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders correctly', () => {
  const tree = renderer.create(<Home teams={[{ name: 'a', img: 'img1' }, { name: 'b', img: 'img2' }]} index={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});
