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

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container px-lg-5">
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
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

const Header = () => {
  return (
    <header className="py-5">
    <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
                <h1 className="display-5 fw-bold">A warm welcome!</h1>
                <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
            </div>
        </div>
    </div>
</header>
  )
}

const PageContent = () => {
  return (
    <section className="pt-4">
       <div className="container px-lg-5">
        <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                        <h2 className="fs-4 fw-bold">Covid Explorer</h2>
                        <p className="mb-0">Explore covid data from covid api</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                        <h2 className="fs-4 fw-bold">Free to download</h2>
                        <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading"></i></div>
                        <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                        <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
                        <h2 className="fs-4 fw-bold">Feature boxes</h2>
                        <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
                        <h2 className="fs-4 fw-bold">Simple clean code</h2>
                        <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                        <h2 className="fs-4 fw-bold">A name you trust</h2>
                        <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
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
            <PageContent />
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
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Routes></Routes>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
