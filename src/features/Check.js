import { createSlice } from '@reduxjs/toolkit';

const checkslice = createSlice({
    name: 'CheckValue',
    initialState:{value:{id:''}},
    reducers: {
        CheckValue : (state,action) =>{
            state.value = action.payload
        }
      }
})

export const {CheckValue} = checkslice.actions; 
export default checkslice.reducer;