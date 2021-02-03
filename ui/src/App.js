import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Header } from "./library/Header";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch></Switch>
      </Router>
    </DndProvider>
  );
}

export default App;
