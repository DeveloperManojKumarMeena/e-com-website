import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[],
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loadUser:(state,actions)=>{}
  },
})

export const {loadUser } = userSlice.actions
 

export default userSlice.reducer