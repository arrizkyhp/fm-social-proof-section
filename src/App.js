import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/style.css";
import Home from "pages/Home";

function App() {
  return (
    <main className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
      </Router>
    </main>
  );
}

export default App;
