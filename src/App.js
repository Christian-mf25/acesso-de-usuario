import "./App.css"
import members from "./members"
import Home from "./components/Home"
import Company from "./pages/Company"
import Customer from "./pages/Customer"
import { Switch, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Switch>

          <Route exact path="/">
            <Home members={members} />
          </Route>

          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>

          <Route exact path="/customer/:id">
            <Customer members={members} />
          </Route>

        </Switch>

      </header>
    </div>
  )
}

export default App