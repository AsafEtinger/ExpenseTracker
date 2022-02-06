import ReactDOM from "react-dom";
import classes from "./AddingRegularExpensesOverlay.module.css";
const AddingRegularExpenseOverlay = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <p>work</p>
      <button>add</button>
      <button
        onClick={() => {
          onClose();
        }}
      >
        close
      </button>
    </div>,
    document.getElementById("portal")
  );
};
export default AddingRegularExpenseOverlay;
