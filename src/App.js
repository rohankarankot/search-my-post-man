import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Branch from "./Components/Branch";
import Landing from "./Components/Landing";
function App() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/branch">
              <Branch />
            </Route>
            <Route path="/landing">
              <Landing />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
