import logo from './logo.svg';
import {BrowserRouter as Router,HashRouter,Routes,Route,Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/loginPage';
import JoinPage from './pages/Join/joinPage';

function App() {
  return (
    // <HashRouter>
  <Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/loginPage' element={<LoginPage/>}/>
    <Route exact path="/joinPage" element={<JoinPage/>}/>

  
  </Routes>
  
  </Router>
  // {/* </HashRouter> */}
  );
}

export default App;
