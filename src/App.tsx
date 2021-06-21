import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import logo from './logo.svg';
// import './App.css';
import './styles.css';
import CovidExplorer from './components/CovidExplorer/CovidExplorer';
import LandingPage from './components/LandingPage/LandingPage';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container px-lg-5">
        <a className="navbar-brand" href="#!">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
  );
}


const PageFooter = () => {
  return (
    <footer className="py-5 bg-dark">
       <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
    </footer>
  );
}

const Routes = () => {
  return (
<Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/covid">
            <CovidExplorer/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes></Routes>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
