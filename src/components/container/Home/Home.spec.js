import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import ru from '../../../config/ru.json';

it('renders correctly', () => {
  const tree = renderer.create(<Home teams={[{ name: 'a', img: 'img1' }, { name: 'b', img: 'img2' }]} index={0} lang={ru} />).toJSON();
  expect(tree).toMatchSnapshot();
});
