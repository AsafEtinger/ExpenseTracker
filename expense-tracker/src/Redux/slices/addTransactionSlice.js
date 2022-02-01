import { createSlice } from "@reduxjs/toolkit";

const addTransactionSlice = createSlice({
  name: "addTransaction",
  initialState: { transactionArray: [] },
  reducers: {
    addANewTransaction: (state, action) => {
      state.transactionArray = [...state.transactionArray, action.payload];
    },
  },
});

export const { addANewTransaction } = addTransactionSlice.actions;
export default addTransactionSlice.reducer;
