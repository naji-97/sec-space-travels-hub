import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketData } from '../redux/rockets/rocketSlice';
import RocketCard from './RocketCard';

const RocketList = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets.data);
  const rocketStatus = useSelector((state) => state.rockets.status);
  useEffect(() => {
    if (rocketStatus === 'idle') dispatch(getRocketData());
  }, [dispatch, rocketStatus]);
  return (
    <Container>
      {rocketsData.slice(1).map((rocket) => (
        <RocketCard
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          imgUrl={rocket.flickr_images[0]}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </Container>
  );
};
export default RocketList;
