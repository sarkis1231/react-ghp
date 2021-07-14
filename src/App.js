import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

// process.env.NODE_ENV === "development" ? "" : process.env.REACT_APP_PUBLIC_URL
function App() {
  return (
      <Router basename="https://sarkis1231.github.io/react-ghp/">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}>
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
