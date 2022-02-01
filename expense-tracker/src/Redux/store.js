import { configureStore } from "@reduxjs/toolkit";
import addTransactionReducer from "./slices/addTransactionSlice";
export default configureStore({
  reducer: {
    transactions: addTransactionReducer,
  },
});
