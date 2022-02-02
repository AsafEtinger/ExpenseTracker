import classes from "./App.module.css";
import DisplayBalance from "./Components/DisplayBalance/DisplayBalance";
import DisplayTransactions from "./Components/DisplayTransactions/DisplayTransactions";
import AddingATransAction from "./Components/AddingATransaction/AddingATransaction";
function App() {
  return (
    <div className={classes.app}>
      <div className={classes.app2}>
        <DisplayBalance />
        <div className={classes.divide}>
          <DisplayTransactions />
          <AddingATransAction />
        </div>
      </div>
    </div>
  );
}

export default App;
