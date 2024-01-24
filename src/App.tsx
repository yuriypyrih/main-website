import React, { useEffect } from "react";
import "./App.css";
import "./theme/animation.css";
import AppRoutes from "./routes/Routes";
import {
  QUIZ_KEY,
  setQuizObject,
  setQuizObjectLocally,
} from "redux/slices/appSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const quizObjJSon = localStorage.getItem(QUIZ_KEY);
    if (quizObjJSon) {
      dispatch(setQuizObject(JSON.parse(quizObjJSon)));
    } else {
      dispatch(
        setQuizObjectLocally({
          lockedSince: null,
          solved: false,
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="App" style={{ background: "#001220" }}>
      <AppRoutes />
    </div>
  );
}

export default App;
