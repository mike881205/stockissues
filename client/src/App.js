import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import API from "./utils/API";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./index.css"
import 'react-widgets/dist/css/react-widgets.css';


class App extends Component {
  state = {
    authorized: false,
    client: {},
    results: [],
    clientResults: [],
    homeActive: false
  };

  componentDidMount() {
    // this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        this.setState({
          authorized: res.data.message ? false : true
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {

    return (
      <Router>
        <Route exact path="/">
          <Home logout={this.logout} />
        </Route>
      </Router>




      // <Router>
      //     <Switch>
      //       <Route exact path="/">
      //         {this.state.authorized ? (
      //           <Home logout={this.logout} />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route exact path="/login">
      //         {this.state.authorized ? (
      //           <Redirect to="/" />
      //         ) : (
      //             <Login isAuthorized={this.isAuthorized} />
      //           )}
      //       </Route>
      //       <Route exact path="/register">
      //         {this.state.authorized ? (
      //           <Redirect to="/" />
      //         ) : (
      //             <Register isAuthorized={this.isAuthorized} />
      //           )}
      //       </Route>
      //       <Route exact path="/clientinput">
      //         {this.state.authorized ? (
      //           <ClientInput setClient={this.setClient} client={this.state.client} />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route exact path="/clients">
      //         {this.state.authorized ? (
      //           <Clients setClientResults={this.setClientResults} />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route exact path="/assessment">
      //         {this.state.authorized ? (
      //           <Assessment setResults={this.setResults} clientID={this.state.client.id} />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route exact path="/confirmation">
      //         {this.state.authorized ? (
      //           <Confirmation />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route exact path="/clientresults">
      //         {this.state.authorized ? (
      //           <ClientResults clientResults={this.state.clientResults} />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route>
      //         <Redirect to="/" />
      //       </Route>
      //     </Switch>
      //     {/* <Route exact path="/results">
      //       <Results results={this.state.results} />
      //     </Route> */}
      //     {/* <Route exact path="/">
      //       <QuestionInput inputQuestion={this.inputQuestion}></QuestionInput>
      //     </Route> */}
      // </Router>
    );
  }
}

export default App;
