import { createSlice } from "@reduxjs/toolkit";

const addTransactionSlice = createSlice({
  name: "addTransaction",
  initialState: { transactionArray: [], regularExpense: [] },
  reducers: {
    addANewTransaction: (state, action) => {
      state.transactionArray = [action.payload, ...state.transactionArray];
    },
    addNewRegularExpense: (state, action) => {
      state.regularExpense = [action.payload, ...state.regularExpense];
    },
    removeRegularExpense: (state, action) => {
      state.regularExpense = state.regularExpense.filter(
        (item) => item.id !== action.payload
      );
    },
    editRegularExpense: (state, action) => {
      const currentExpenseToEdit = state.regularExpense.find(
        (item) => (item.id = action.payload)
      );
    },
  },
});

export const {
  addANewTransaction,
  addNewRegularExpense,
  removeRegularExpense,
} = addTransactionSlice.actions;
export default addTransactionSlice.reducer;
