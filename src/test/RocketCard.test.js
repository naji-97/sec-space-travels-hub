import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RocketCard from '../components/RocketCard'; // Update the path to the RocketCard component
import { toggleRocketBooking } from '../redux/rockets/rocketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
});

test('renders RocketCard correctly', () => {
  const props = {
    id: 1,
    name: 'Rocket Name',
    description: 'Rocket Description',
    imgUrl: 'rocket.jpg',
    reserved: false,
  };
  // react/jsx-props-no-spreading
  render(<RocketCard
    id={props.id}
    name={props.name}
    description={props.description}
    imgUrl={props.imgUrl}
    reserved={props.reserved}
  />);

  const nameElement = screen.getByText(/Rocket Name/i);
  expect(nameElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Rocket Description/i);
  expect(descriptionElement).toBeInTheDocument();

  const reserveButton = screen.getByText(/Reserve Rocket/i);
  expect(reserveButton).toBeInTheDocument();

  fireEvent.click(reserveButton);
  expect(mockDispatch).toHaveBeenCalledWith(toggleRocketBooking(props.id));
});
