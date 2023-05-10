import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import About from '../components/About';
import '@testing-library/jest-dom';

describe('Calculate.js File Testing', () => {
  test('Render by Testing library', () => {
    render(<About />);
    const AboutContent = screen.getByTestId('AboutContent');
    expect(AboutContent);
  });

  test('renders correctly', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
