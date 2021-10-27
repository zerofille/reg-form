import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./Components/login-form";
import SigInForm from "./Components/sign-up-from";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Link to="/login">Log in</Link>

          <Link to="/signin">Sign in </Link>
        </Route>
        <Route path="/signin">
          <SigInForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
