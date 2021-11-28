import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Detail } from "./routers/detail/Detail";
import { Header } from "./components/Header";
import { Home } from "./routers/home/Home";
import { Search } from "./routers/search/Search";
import { router } from "./router";
import { GlobalStyle } from "./style/GlobalStyle";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          <Home />
        </Route>

        <Route path={router.detail}>
          <Detail />
        </Route>

        <Route path={router.search}>
          <Search />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
