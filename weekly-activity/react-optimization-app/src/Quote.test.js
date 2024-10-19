import Quote from './Quote.js';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';

test('renders quote screen', () => {
  let testQuote = {quote: "Test Quote", character: "Test Character"};
  const quote = renderer.create(<Quote quote={testQuote}/>);
  let tree = quote.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Quote appears', () => {
  let testQuote = {quote: "Test Quote", character: "Test Character"};
  render(<Quote quote={testQuote}/>);
  const actualQuote = screen.getByText("Test Quote (Test Character)");
  expect(actualQuote).toBeTruthy();
});