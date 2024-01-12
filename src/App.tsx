import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <nav className="fixed w-full">
        <Navbar />
      </nav>
      <section className="">
        <Jumbotron />
      </section>
    </>
  );
}

export default App;
