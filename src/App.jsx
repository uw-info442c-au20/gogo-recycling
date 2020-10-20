import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navigation></Navigation>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
