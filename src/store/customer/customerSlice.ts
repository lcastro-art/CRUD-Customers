import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CustomerState {
    name: string,
    description: string
}

const initialState: CustomerState[] = [
    {
        name: 'Michela',
        description: 'Tiene 6 años'
    },
    {
        name: 'Leonardo',
        description: 'Tiene 35 años'
    }
];


export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addNewCustomer: (state, action: PayloadAction<CustomerState>) => {
            state.push(action.payload);
        },
        deleteCustomer: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addNewCustomer, deleteCustomer } = customerSlice.actions

export default customerSlice.reducer