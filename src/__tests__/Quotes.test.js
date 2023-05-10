import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';

test('renders correctly', () => {
const tree = renderer.create(<Quote />).toJSON();
    console.log (tree)
  expect(tree).toMatchSnapshot();
})