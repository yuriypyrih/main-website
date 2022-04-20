import React from "react";
import "./App.css";
import "./theme/animation.css";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App" style={{ background: "#001220" }}>
      <AppRoutes />
    </div>
  );
}

export default App;
