import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="head">
        
          <div className="options">
            <a>
              My Wallet
            </a>
            <a>
              Transfer
            </a>
            <div>
              Accounts
            </div>
          </div>
          <select>
            <option>
              Ethereum
            </option>
            <option>
              Dogecoin
            </option>
            <option>
              Criptokitty
            </option>
          </select>

        </div>
      </header>
    </div>
  );
}

export default App;
