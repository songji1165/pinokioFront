import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle"
import Home from "./routes/Home";
import Admin from "./routes/Admin";


function App() {

  return (
      <>
      <HashRouter>
        <Route path="/" component={Home} exact={true} />
        <Route path="/admin" component={Admin}/>
      </HashRouter>
      <GlobalStyle/>
      </>
  );
}

export default App;
