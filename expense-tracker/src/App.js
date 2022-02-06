import classes from "./App.module.css";
import DisplayBalance from "./Components/DisplayBalance/DisplayBalance";
import DisplayTransactions from "./Components/DisplayTransactions/DisplayTransactions";
import AddingATransAction from "./Components/AddingATransaction/AddingATransaction";
import RegularExpenses from "./Components/RegularExpenses/RegularExpenses";
function App() {
  return (
    <div className={classes.app}>
      <div className={classes.app2}>
        <DisplayBalance />
        <RegularExpenses />
        <div className={classes.divide}>
          <DisplayTransactions />
          <AddingATransAction />
        </div>
      </div>
    </div>
  );
}

export default App;
