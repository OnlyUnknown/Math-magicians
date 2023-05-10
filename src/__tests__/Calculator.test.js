import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Calculate.js File Testing', () => {
  test('Render by Testing library', () => {
    render(<Calculator />);
    const CalcContent = screen.getByTestId('CalcContent');
    expect(CalcContent).toBeInTheDocument();
  });

  test('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
