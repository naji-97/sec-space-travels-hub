import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketCard from '../components/RocketCard';

describe('Component for Individual Rocket', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <RocketCard />
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
