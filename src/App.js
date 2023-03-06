import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Sections/Section1/Section1';
import Section2 from './Components/Sections/Section2/Section2';
import Section3 from './Components/Sections/Section3/Section3';
import VideoSection from './Components/Sections/VideoSection/VideoSection';
import Footer from './Components/Sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <VideoSection></VideoSection>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </div>
  );
}

export default App;
