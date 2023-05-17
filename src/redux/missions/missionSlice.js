import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissios', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/missions');
    const data = await res.data;
    return data;
  } catch (err) {
    return err.message;
  }
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    status: 'idle',
    data: [],
    error: '',
  },
  reducers: {
    joinMission: (state, action) => {
      const updatedData = state.data.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return { ...state, data: updatedData };
    },
    leaveMission: (state, action) => {
      const updatedData = state.data.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return { ...state, data: updatedData };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({ ...state, status: 'success', data: action.payload }))
      .addCase(fetchMissions.rejected, (state, action) => ({ ...state, status: 'error', error: action.payload }));
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
