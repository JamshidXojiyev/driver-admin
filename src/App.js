import { Route, Switch, useHistory } from "react-router-dom";
import LogIn from "./pages/login/login";
import MainView from "./pages/main-view/main-view";

function App() {
  const history = useHistory();
  history.push("/login");
  return (
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route path="/" component={MainView} />
    </Switch>
  );
}

export default App;
