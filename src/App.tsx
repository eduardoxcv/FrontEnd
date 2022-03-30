import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SobreNos from './paginas/sobrenos/SobreNos';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
<<<<<<< HEAD
          <Route path='/sobrenos'>
            <SobreNos/>
          </Route>
        </div>
=======
       <Route path='/contato'>
            <Contato />
          </Route>
          </div>
>>>>>>> 2ca8c9f281ff5072ae9bfb661137010797595786
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
