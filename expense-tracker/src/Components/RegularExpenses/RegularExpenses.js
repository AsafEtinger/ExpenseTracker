import { useState } from "react";

import AddingRegularExpenseOverlay from "./AddingRegularExpenseOverlay";

const RegularExpenses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [regularExpensesList, setRegularExpensesList] = useState([]);

  //   at addingRegularExpense i need to open the overlay window
  const addingRegularExpenseHandler = (exp) => {};

  //   at the window that open I have description amount addBtn deleteBtn
  // setRegularExpensesList(...regularExpensesList, exp); this is the logic for the addBtn

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
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default RegularExpenses;
