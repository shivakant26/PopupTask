import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import UserForm from './component/UserForm';
import UserList from './component/UserList';
import PageNotFound from './component/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Switch>
        <Route path="/" exact component={UserList}/>
          <Route path="/userform" component={UserForm}/>
          <Route path="/list" component={UserList}/>
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
