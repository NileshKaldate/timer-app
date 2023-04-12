import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timers: [],
  },
  reducers: {
    addTimer: (state, payload) => {
      state.timers.push({ date: new Date(), seconds: Number(payload.payload) });
    },
    countDown: (state) => {
      state.timers = state.timers.map((item) => {
        return {
          ...item,
          seconds: item.seconds - 0.005,
        };
      });
      state.timers = state.timers.filter((item) => {
        return item.seconds > 0;
      });
    },
  },
});

export const { addTimer, countDown } = timerSlice.actions;

export default timerSlice.reducer;
