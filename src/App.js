
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-body text-white font-poppins pb-12">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
