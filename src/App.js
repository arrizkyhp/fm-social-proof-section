import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/style.css";
import Home from "pages/Home";

function App() {
  return (
    <main className="container">
      <Router basename="/fm-social-proof-section">
        <Route exact path="/" component={Home} />
      </Router>
    </main>
  );
}

export default App;
