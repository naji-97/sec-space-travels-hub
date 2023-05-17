import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketList from '../components/Rockets';

describe('Rocket List View', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
