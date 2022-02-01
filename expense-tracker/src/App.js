import "./App.css";
import DisplayBalance from "./Components/DisplayBalance/DisplayBalance";
import DisplayTransactions from "./Components/DisplayTransactions/DisplayTransactions";
import AddingATransAction from "./Components/AddingATransaction/AddingATransaction";
function App() {
  return (
    <div className="App">
      <DisplayBalance />
      <DisplayTransactions />
      <AddingATransAction />
    </div>
  );
}

export default App;
