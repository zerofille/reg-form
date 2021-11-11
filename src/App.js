import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./Pages/Login-form";
import SigInForm from "./Pages/SignIn-form/index.";
import Header from "./Components/Header";
import styles from './app.module.scss'
function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route  exact path="/">
          <div className={styles.links}>
          <Link to="/login">Log in</Link>

          <Link to="/signin">Sign in </Link>
          </div>
        </Route>
        <Route path="/signin" >
          <Header href="/Login" children="Login"/>
          <SigInForm />
        </Route>
        <Route path="/login">
         <Header href="/signin" children="Sign in"/>
          <LoginForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
