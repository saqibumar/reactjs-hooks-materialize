import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
// import UsersList from './components/UsersList';
// import AddUsers from './components/AddUsers';
// import EditUsers from './components/EditUsers';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import Container from './components/Container';


function App() {
  
  const Styles = styled.div`
    .navbar { background-color: #336699; }
    a, .navbar-nav, .navbar-light .nav-link {
      color: yellow;
      &:hover { color: white; }
    }
    .navbar-brand {
      font-size: 1.4em;
      color: #FFF;
      &:hover { color: yellow; }
    }
  `;
  return (
      <div className="App">
        <Styles>
          <Navbar expand="lg">
            <Navbar.Brand href="/">Hooks demo...</Navbar.Brand>
          </Navbar>
        </Styles>
        <Router>
          <Switch>
            <Route exact path='/' component={Container}/>
            {/* <Route exact path='/user-list' component={UsersList}/>
            <Route exact path='/add-user' component={AddUsers}/>
            <Route exact path='/edit-user' component={EditUsers}/> */}
          </Switch>
        </Router>
      </div>
  );
}


export default App;
