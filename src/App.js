import './App.css';
import Header from './components/common/Header';
import Demo from './components/pages/Demo';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Header>
        <a href='/' className='py-5'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Services</a>
        <a href='/'>Contact</a>
      </Header>
      <main>
        <Home />
        <Demo />
      </main>
    </div>
  );
}

export default App;
