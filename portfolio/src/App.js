import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { TopNavigation } from "../src/Components/TopNavigation";
import { Footer } from "../src/Components/Footer";
import "./App.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";

function App() {
  return (
    <BrowserRouter>
      <TopNavigation />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
