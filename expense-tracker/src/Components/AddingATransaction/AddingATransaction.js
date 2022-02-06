import { useState } from "react";
import classes from "./AddingATransaction.module.css";
import { useDispatch } from "react-redux";
import { addANewTransaction } from "../../Redux/slices/addTransactionSlice";

const AddingATransAction = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onAddClickHandler = () => {
    if (title.length > 2 && amount.length >= 1) {
      dispatch(addANewTransaction({ name: title, sum: +amount }));
    }
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <input
        className={classes.input}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <p className={classes.inputNumberTitle}>
        (Positive number will be an income, Negative number will be expense)
      </p>
      <input
        className={classes.input}
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button onClick={onAddClickHandler} className={classes.addBtn}>
        Add
      </button>
    </form>
  );
};

export default AddingATransAction;
