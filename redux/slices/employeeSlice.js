import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
    editEmployee: (state, action) => {
      const index = state.employees.findIndex(e => e.id === action.payload.id)
      if (index !== -1) state.employees[index] = action.payload
    },
  },
})

export const { addEmployee, editEmployee } = employeeSlice.actions
export default employeeSlice.reducer
