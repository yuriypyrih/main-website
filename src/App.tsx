import React, { useEffect } from "react";
import "./App.css";
import "./theme/animation.css";
import AppRoutes from "./routes/Routes";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
