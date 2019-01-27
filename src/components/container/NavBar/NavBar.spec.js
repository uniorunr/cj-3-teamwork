import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';
import ru from '../../../config/ru.json';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NavBar lang={ru} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
