import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../components/Mission';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Missions component', () => {
  it('matches snapshot', () => {
    useSelector.mockImplementation((selector) => selector({
      missions: [
        {
          mission_id: '1',
          mission_name: 'Mars Mission',
          description: 'A mission to Mars',
          reserved: false,
        },
      ],
    }));

    const { asFragment } = render(<Missions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
