import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <ContextProvider>
                <Router>
                    <Navigation></Navigation>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </ContextProvider>
        </div>
    );
};

export default App;
