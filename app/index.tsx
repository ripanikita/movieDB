import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux"

import App from "./components/App";
import PageMovie from "./components/PageMovie";
import FavoriteList from "./components/FavoriteList";

import configureStore from "./store/configureStore";
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
                <Route path="/" component={App}/>
                <Route path="/movie/:id" component={PageMovie}/>
                <Route path="/favorite" component={FavoriteList}/>
        </Router>
    </Provider>,
  document.getElementById("app")
);