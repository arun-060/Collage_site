import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
