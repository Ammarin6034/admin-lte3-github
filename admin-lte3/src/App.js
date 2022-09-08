import logo from './logo.svg';
import './App.css';
import React from 'react';
import Heder from './Components/Heder';
import SideBar from './Components/SideBar';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Report from './Components/Report';
import Port from './Components/Port';
import { HashRouter as Router , Switch , Route} from "react-router-dom";



function App() {
  return (
   <div Class ="App">
    <Router basename={'/admin-lte3-github'}>
    <Heder/>
    <SideBar/>
        <Switch>
          <Route component={Content} path="/" exact />
          <Route component={Dashboard} path="/admin-lte3-github/#/dashboard" />
          <Route component={Report} path="/admin-lte3-github/#/report" />
          <Route component={Port} path="/admin-lte3-github/#/Port"/>
        </Switch>
      </Router>
    <Footer/>

    
   </div>
  );
}

export default App;