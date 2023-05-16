import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketSlice,
  },
});
export default store;
