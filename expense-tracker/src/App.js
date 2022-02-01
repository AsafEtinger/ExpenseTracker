import classes from "./App.module.css";
import DisplayBalance from "./Components/DisplayBalance/DisplayBalance";
import DisplayTransactions from "./Components/DisplayTransactions/DisplayTransactions";
import AddingATransAction from "./Components/AddingATransaction/AddingATransaction";
function App() {
  return (
    <div className="App">
      <DisplayBalance />
      <div className={classes.DisplayTransactions}>
        <DisplayTransactions />
      </div>
      <AddingATransAction />
    </div>
  );
}

export default App;
