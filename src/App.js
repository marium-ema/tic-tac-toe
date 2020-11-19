//import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import ViewPlay from './components/view/ViewPlay';
import ViewHome  from './components/view/ViewHome';
import ViewScore from './components/view/ViewScore';

function App() {
  return (
    <div>
      <Router> 
          <div className="main-header">
            <div className="tab"><Link className="link" to="/"><h3>Home</h3></Link></div>
            <div className="tab"><Link className="link" to="/play"><h3>Play</h3></Link></div>
            <div className="tab"><Link className="link" to="/score"><h3>See Score</h3></Link></div>
          </div>
          <Route path="/" exact component={ViewHome}/>
          <Route path="/play" exact component={ViewPlay} />
          <Route path="/score" exact component={ViewScore} />
      </Router>
      
    </div>
  
  );
}

export default App;
