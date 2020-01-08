import React from 'react';
import {HashRouter,Route} from 'react-router-dom'; 
import './App.css';
import './Slide.css';
import './Footer.css';
import Header from './Header';
import Footer from './Footer';
import Home from '../routes/Home';
import About from '../routes/About';
import Team from '../routes/Team';
function App() {
  return (
    <div className="App">
        <HashRouter>
          <Header></Header>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/team" component={Team}></Route>
          <Footer></Footer>
        </HashRouter>
    </div>
  );
}

export default App;
