import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle"
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Login from "./routes/Login";



function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
      <>
          <GlobalStyle/>
      <HashRouter>
        <Route path="/" component={Home} exact={true} />
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
      </HashRouter>
      </>
  );
}

export default App;
