import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Update the path to the Navbar component

test('renders navbar links correctly', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  // Check if the logo is rendered
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toBeInTheDocument();

  // Check if the heading is rendered
  const headingElement = screen.getByText(/space travelers hub/i);
  expect(headingElement).toBeInTheDocument();

  // Check if the Rockets link is rendered
  const rocketsLink = screen.getByText(/rockets/i);
  expect(rocketsLink).toBeInTheDocument();

  // Check if the Missions link is rendered
  const missionsLink = screen.getByText(/missions/i);
  expect(missionsLink).toBeInTheDocument();

  // Check if the My Profile link is rendered
  const profileLink = screen.getByText(/my profile/i);
  expect(profileLink).toBeInTheDocument();
});
