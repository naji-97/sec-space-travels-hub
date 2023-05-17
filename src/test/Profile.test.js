import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/Profile';

describe('Profile Page', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
