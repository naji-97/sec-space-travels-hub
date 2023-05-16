import React from 'react';
import {
  Alert, Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../style/style.scss';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.slice(1, 7).filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.data);
  const reservedRocktes = rockets.filter((r) => r.reserved);

  return (
    <Container className="p-2">
      <Row md={2}>
        <Col>
          <h3>My Missions</h3>
          {joinedMissions.length ? null : (
            <Alert>You haven&apos;t joined any missions yet.</Alert>
          )}
          <ListGroup>
            {joinedMissions.map((m) => (
              <ListGroup.Item key={m.mission_id}>
                {m.mission_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h3>My Rockets</h3>
          {reservedRocktes.length ? null : (
            <Alert>You haven&apos;t reserved any rockets yet.</Alert>
          )}
          <ListGroup>
            {reservedRocktes.map((r) => (
              <ListGroup.Item key={r.id}>{r.rocket_name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
