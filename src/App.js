import './App.css';
import MainRoute from './Routers/MainRoute';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
        <Navbar/>
        <MainRoute/>
        <Footer/>
    </div>
  );
}

export default App;
