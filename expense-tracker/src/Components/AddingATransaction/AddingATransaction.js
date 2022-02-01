import { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button onClick={onAddClickHandler}>Add</button>
    </form>
  );
};

export default AddingATransAction;
