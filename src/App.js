import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Sections/Section1/Section1';
import Section2 from './Components/Sections/Section2/Section2';
import VideoSection from './Components/Sections/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <VideoSection></VideoSection>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}

export default App;
