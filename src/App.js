import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Introduction></Introduction>
        Hi
      </header>
    </div>
  );
}

export default App;
