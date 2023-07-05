
import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'Tokenvalue',
  initialState:{value:{token:''}},
  reducers: {
    Tokenvalue: (state,action) =>{
        state.value = action.payload
    }
  }
});

export const { Tokenvalue } = tokenSlice.actions;
export default tokenSlice.reducer;
