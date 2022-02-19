import { Route, Switch, useHistory } from "react-router-dom";
import LogIn from "./pages/login/login";
import MainView from "./pages/main-view/main-view";
import { positions, Provider as AlertProvider } from "react-alert";
import { AlertStyle } from "./global-styles/alert-style.s";
import { ReactComponent as ErrorAlertIcon } from "./assats/icons/error-alert.svg";
import { ReactComponent as SuccessAlertIcon } from "./assats/icons/success-alert.svg";
import { ReactComponent as InfoAlertIcon } from "./assats/icons/info-alert.svg";
import { useReducer } from "react";
import LanguageContext, {
  initialState,
  languageReducer,
} from "./locale/locale";
import { useState } from "react";

const AlertTemplate = ({ options, message, close }) => (
  <AlertStyle type={options.type} style={{ padding: "12px 16px" }}>
    {options.type === "info" && <InfoAlertIcon />}
    {options.type === "success" && <SuccessAlertIcon />}
    {options.type === "error" && <ErrorAlertIcon />}
    {message}
  </AlertStyle>
);

function App() {
  const history = useHistory();
  const [state, dispatch] = useReducer(languageReducer, initialState);
  !localStorage.getItem("token") ? history.push("/login") : history.push("/");

  const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 4000,
    offset: "4px",
  };
  // const [show, setShow] = useState(false);
  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route path="/" component={MainView} />
        </Switch>
      </AlertProvider>
    </LanguageContext.Provider>
    // <div>
    //   <button onClick={() => setShow(!show)}> Toggle </button>
    //   {show && <TestComp />}
    // </div>
  );
}

export default App;
