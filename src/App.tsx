import React from "react";
import Login from "pages/login/Login";
import UsersIndex from "pages/users/UsersIndex";
import GlobalStyle from "theme/injectGlobal";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Switch>
          <Redirect from="/users/" to="/" exact />
          <Redirect from="/users" to="/" exact />
          <Redirect from="/" to="/login" exact />

          <Route
            path="/users/:page"
            component={(props) => <UsersIndex {...props} />}
          />
          <Route path="/login" component={() => <Login />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
