//! Link all Route to Function
//TODO SET UP : Home - Create - DATA
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataDetail from "./DataTable";
import Home from "./Home";

import Datas from "./Datas";

// import Create from "./components/Create";
// import Home from "./components/Home";
// import DataDetails from "./DataDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* //? Link file to Function */}

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/datas/:id">
              <DataDetail />
            </Route>

            <Route path="/datas">
              <Datas />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
