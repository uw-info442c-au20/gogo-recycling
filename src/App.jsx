import "./App.css";
import React from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import RecycleGuide from "./components/RecycleGuide";

const App = () => {
    return (
        <div className="App">
            <ContextProvider>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/posts" component={Posts}/>
                        <Route exact path="/recycle-guide" component={RecycleGuide}/>
                        <Route path="/profile" component={Profile}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </ContextProvider>
        </div>
    );
};

export default App;