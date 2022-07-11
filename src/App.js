import './App.scss';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename={'/'}>
      <Routes>    
        <Route path="/" element={<Home/>} pageEvent='' />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
