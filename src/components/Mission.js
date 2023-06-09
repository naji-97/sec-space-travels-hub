import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/style.scss';

import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionSlice';

function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.status]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div className="mission-container">
      <div className="titles">
        <h2 className="border-container">Mission</h2>
        <h2 className="border-container">Description</h2>
        <h2 className="border-container">Status</h2>
        <h2 className="border-container"> </h2>
      </div>
      <ul className="mission-list">
        {missions.data && missions.data.slice(1, 7).map((mission) => (
          <li className="mission-item" key={mission.mission_id}>
            <div className="border-container">
              <h3 className="mission-name">{mission.mission_name}</h3>
            </div>
            <div className="border-container">
              <p className="mission-description">{mission.description}</p>
            </div>
            <div className="border-container">
              <div className="mission-badge-container">
                {mission.reserved ? (
                  <div className="active-member-badge">Active Member</div>
                ) : (
                  <div className="not-a-member-badge">NOT A MEMBER</div>
                )}
              </div>
            </div>
            <div className="border-container">
              <div className="mission-action-container">
                {mission.reserved ? (
                  <button
                    type="button"
                    className="leave-mission-button"
                    onClick={() => handleLeaveMission(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="join-mission-button"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mission;
