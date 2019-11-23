import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './components/top';
import Left from './components/left';
import Right from './components/right';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index_detai from './components/QL_detai/index_detai';
import Add_detai from './components/Add_detai/index_add';
class App extends Component{
  render(){
    return(
      <Router>
      <div className="all">
        <header>
          <Top />
        </header>
        <div className="row">
          <div id="dash-broad" className="col-lg-2">
          <Left />
          </div>
          <Switch>
           <Route path='/index_detai' component={Index_detai} />
           <Route path='/add_detai' component={Add_detai} />
          <div className="col-lg-10">  
          <Right />
          </div>
          </Switch>
        </div>
        <footer>
         
        </footer>
      </div>
      </Router>
    )
  }
}

export default App;
