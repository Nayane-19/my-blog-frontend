import './App.scss';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Article from './containers/Article/Article';
import Navigation from './components/Navigation/Navigation';
import Articles from './containers/Articles/Articles';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';


function App() {

  return (
    <Router basename={'/'}>
      <Routes>    
        <Route path="/" element={<Home/>}/>
        <Route path="/artigo/:id" element={<Article/>}/>
        <Route path="/artigos" element={<Articles/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
