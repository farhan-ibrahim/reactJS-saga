import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store/index";

import Header from "./components/header";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import Home from "./containers/home";
import Completed from "./containers/home/completed";
import Create from "./components/create";
import Details from "./components/taskCard/details";

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

function App() {
  return (
    // To allow store to be used
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Home} />
              <Route exact path="/archived" component={Completed} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/task/:id" component={Details} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
