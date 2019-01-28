import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';
import ru from '../../../config/ru.json';

it('renders correctly', () => {
  const tree = renderer.create(<NavBar lang={ru} active onClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
