import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRocketData = createAsyncThunk('rockets/get', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/rockets');
    const data = await res.data;
    return data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  status: 'idle',
  data: [],
  error: '',
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleRocketBooking(state, action) {
      const rocket = state.data.find((r) => r.id === action.payload);
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRocketData.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getRocketData.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        data: action.payload.map((r) => ({
          id: r.id,
          rocket_name: r.rocket_name,
          description: r.description,
          flickr_images: r.flickr_images,
          reserved: false,
        })),
      }))
      .addCase(getRocketData.rejected, (state, action) => ({
        ...state,
        status: 'error',
        error: action.payload,
      }));
  },
});

export const { toggleRocketBooking } = rocketSlice.actions;
export default rocketSlice.reducer;
