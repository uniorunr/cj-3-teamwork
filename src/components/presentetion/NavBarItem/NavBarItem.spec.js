import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBarItem from './NavBarItem';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NavBarItem id="home" hash="/" onClick={() => {}} name="Home" />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
