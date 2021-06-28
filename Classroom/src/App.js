import logo from './logo.svg';
import './App.css';
import ListCards from './components/cards/ListCards'; 
import navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <navbar/>
      <ListCards/>
    
    </div>
  );
}

export default App;
