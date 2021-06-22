import logo from './logo.svg';
import './App.css';
import ListCard from './components/cards/ListCard'; 
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <h1>Este es mi primera aplicacion en react</h1>
      <Navbar/>
      <ListCard/>
    
    </div>
  );
}

export default App;
