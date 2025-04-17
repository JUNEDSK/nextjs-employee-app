import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null,
  profileImage: null, // ✅ Add this for image upload
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload 
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.profileImage = null 
    },
  },
})

export const { setToken, setUser, setProfileImage, logout } = authSlice.actions
export default authSlice.reducer
