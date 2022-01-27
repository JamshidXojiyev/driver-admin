import { Route, Switch, useHistory } from "react-router-dom";
import LogIn from "./pages/login/login";
import MainView from "./pages/main-view/main-view";
import { positions, Provider as AlertProvider } from "react-alert";
import { AlertStyle } from "./global-styles/alert-style.s";
import { ReactComponent as ErrorAlertIcon } from "./assats/icons/error-alert.svg";
import { ReactComponent as SuccessAlertIcon } from "./assats/icons/success-alert.svg";
import { ReactComponent as InfoAlertIcon } from "./assats/icons/info-alert.svg";
import { useEffect } from "react";
import Loading from "./components/loading/loading";

const AlertTemplate = ({ options, message, close }) => (
  <AlertStyle type={options.type} style={{ padding: "12px 16px" }}>
    {options.type === "info" && <InfoAlertIcon />}
    {options.type === "success" && <SuccessAlertIcon />}
    {options.type === "error" && <ErrorAlertIcon />}
    {message}
  </AlertStyle>
);

function App() {
  const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 4000,
    offset: "4px",
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Switch>
        <Route exact path="/login" component={LogIn} />
        <Route path="/" component={MainView} />
      </Switch>
    </AlertProvider>
  );
}

export default App;
