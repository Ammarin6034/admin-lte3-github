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
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";



function App() {
  return (
   <div Class ="App">
    <Router>
    <Heder/>
    <SideBar/>
        <Switch>
          <Route component={Content} path="/" exact />
          <Route component={Dashboard} path="/dashboard" />
          <Route component={Report} path="/report" />
          <Route component={Port} path="/port"/>
        </Switch>
      </Router>
    <Footer/>

    
   </div>
  );
}

export default App;