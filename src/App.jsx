import "./App.css";
import React from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import Copyright from "./components/Copyright";
import Navigation from "./components/Navigation";
import CreatePost from "./components/CreatePost";

const App = () => {
    return (
        <div className="App bg-dark">
            <ContextProvider>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/posts" component={Posts}/>
                        <Route exact path="/create" component={CreatePost}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </ContextProvider>
            <Copyright/>
        </div>
    );
};

export default App;