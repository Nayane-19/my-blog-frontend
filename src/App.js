import './App.scss';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Article from './containers/Article/Article';
import Navigation from './components/Navigation/Navigation';
import Articles from './containers/Articles/Articles';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import { useBlogContext } from './contexts/BlogContext';
import WriteArticle from './containers/WriteArticle/WriteArticle';
import MyArticles from './containers/MyArticles/MyArticles';


function App() {
  const {user} = useBlogContext();

  return (
    <Router basename={'/'}>
      <Routes>    
        <Route path="/" element={<Home/>}/>
        <Route path="/artigo/:id" element={<Article/>}/>
        <Route path="/artigos" element={<Articles/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Signup/>}/>
        <Route path="/escrever-artigo" element={user ? <WriteArticle/> : <Login/>}/>
        <Route path="/meus-artigos/:id" element={user ? <MyArticles/> : <Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
