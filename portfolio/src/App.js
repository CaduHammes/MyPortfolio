import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
