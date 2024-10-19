import Header from './Header.js';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';

test('renders header screen', () => {
  const header = renderer.create(<Header text="Test Header" />);
  let tree = header.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Header appears', () => {
  render(<Header text="Test Header" />);
  const actualHeader = screen.getByText("Test Header");
  expect(actualHeader).toBeTruthy();
});