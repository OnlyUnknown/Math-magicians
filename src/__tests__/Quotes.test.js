import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


describe('Calculate.js File Testing', () => {
    test("Render by Testing library", () => {
        render(<Quote/>); 
        const QuoteContent = screen.getByTestId("QuoteContent");
        expect(QuoteContent).toBeInTheDocument()
        })


test('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
});