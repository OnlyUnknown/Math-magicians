import renderer from 'react-test-renderer';
import About from '../components/About';

test('renders correctly', () => {
  const tree = renderer.create(<About />).toJSON();
    console.log (tree)
  expect(tree).toMatchSnapshot();
})