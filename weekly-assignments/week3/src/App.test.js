import renderer from 'react-test-renderer';
import App from './App';
import {render, screen} from '@testing-library/react';

test('renders quote screen', () => {
  const app = renderer.create(<App />);
  let tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button appears', () => {
  render(<App />);
  const button = screen.getByText("New Quote");
  expect(button).toBeTruthy();
});
