import "./App.css";
import React from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import CreatePost from "./components/CreatePost";

const App = () => {
    return (
        <div className="App">
            <ContextProvider>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/create" component={CreatePost}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </ContextProvider>
        </div>
    );
};

export default App;
