import './App.css';
import Header from './components/common/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Header>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Services</a>
        <a href='/'>Contact</a>
      </Header>
      <Home />
    </div>
  );
}

export default App;
