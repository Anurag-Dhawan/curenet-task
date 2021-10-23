import './App.css';
import Create from './Components/Create';
import Read from './Components/read';
import Update from './Components/update'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App(){
    return(
        <Router>
        <div className="main">
            <h2 className="main-header">React Crud Operations</h2>
            <div>
               <Route exact path='/create' component={Create} />
            </div>
            <div style={{ marginTop: 20 }}>
              <Route exact path='/read' component={Read} />
           </div>

           <Route path='/update' component={Update} />
        </div>
        </Router>
    );
}

export default  App ;
