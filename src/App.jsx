import "./App.css";
import React from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import Copyright from "./components/Copyright";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div className="App">
            <ContextProvider>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/posts" component={Posts}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </ContextProvider>
            <Copyright/>
        </div>
    );
};

export default App;