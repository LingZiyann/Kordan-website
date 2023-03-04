import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Sections/Section1/Section1';
import Section2 from './Components/Sections/Section2/Section2';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}

export default App;
