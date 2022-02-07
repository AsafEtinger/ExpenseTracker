import ReactDOM from "react-dom";
import classes from "./AddingRegularExpensesOverlay.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewRegularExpense } from "../../Redux/slices/addTransactionSlice";

const AddingRegularExpenseOverlay = ({ open, onClose }) => {
  const [regularExpenseName, setRegularExpenseName] = useState("");
  const [regularExpenseAmount, setRegularExpenseAmount] = useState("");

  const dispatch = useDispatch();
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <form
        className={classes.regularExpense}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Adding a regular expense</p>
        <input
          type="text"
          placeholder="Expense"
          value={regularExpenseName}
          onChange={(e) => {
            setRegularExpenseName(e.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="Amount"
          value={regularExpenseAmount}
          onChange={(e) => {
            setRegularExpenseAmount(e.target.value);
          }}
        ></input>
        <div className={classes.modalBtn}>
          {regularExpenseName && regularExpenseAmount && (
            <button
              onClick={() => {
                dispatch(
                  addNewRegularExpense({
                    expense: regularExpenseName,
                    amount: regularExpenseAmount,
                  })
                );
                setRegularExpenseName("");
                setRegularExpenseAmount("");
              }}
            >
              Add
            </button>
          )}
          <button type="button">Delete Expense</button>
          <button
            type="button"
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("portal")
  );
};
export default AddingRegularExpenseOverlay;
