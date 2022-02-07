import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./RegularExpenses.module.css";
import AddingRegularExpenseOverlay from "./AddingRegularExpenseOverlay";

const renderExpenses = (list) => {
  return list.map((item, i) => {
    return (
      <li
        key={i}
        className={classes.listItem}
        onClick={() => {
          alert("working!");
        }}
      >
        <p>{item.expense}</p>
        <p>{`${item.amount}₪`}</p>
      </li>
    );
  });
};

const RegularExpenses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [regularExpensesList, setRegularExpensesList] = useState([]);
  const { regularExpense } = useSelector((state) => state.transactions);

  const renderRegularExpensesList = renderExpenses(regularExpense);
  const regularExpenseLength = regularExpense.length < 5 ? true : false;

  return (
    <div>
      <div>{regularExpensesList}</div>
      <div>
        <AddingRegularExpenseOverlay
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
        <p>(Here you can add up to five regular incomes or expenses)</p>
        <div className={classes.regularExpenseDisplayContainer}>
          <ul className={classes.ul}>{renderRegularExpensesList}</ul>
          {regularExpenseLength && (
            <button
              className={classes.addBtn}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegularExpenses;
