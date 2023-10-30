import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route  path="/">
              <Home />
            </Route>

            <Route  path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route>
              <NotFound path="*" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;