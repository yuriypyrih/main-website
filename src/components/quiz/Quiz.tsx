import React, { useEffect, useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { setQuizObjectLocally } from "redux/slices/appSlice";

type QuizT = {
  id: string;
  question: string;
  answer: string;
};

const QA: QuizT[] = [
  { id: "Q1", question: "What is my favourite dog breed?", answer: "pug" },
  { id: "Q2", question: "What am I allergic to?", answer: "cat" },
  { id: "Q3", question: "Where did I attend university?", answer: "samo" },
];

const randomizeArray = (arr: Array<QuizT>) => {
  let newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // Swap elements
  }
  return newArr;
};

type TProps = unknown;

const Quiz: React.FC<TProps> = () => {
  const dispatch = useDispatch();
  const { quizObject } = useSelector((root: RootState) => root.app);

  const [quiz, setQuiz] = useState<QuizT[]>(QA);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizT>(QA[0]);
  const [answer, setAnswer] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
  }, [answer]);

  useEffect(() => {
    const randomArray = randomizeArray(QA);
    setSelectedQuiz(randomArray[0]);
    setQuiz(randomArray);
  }, []);

  const changeQuestion = () => {
    const index = quiz.findIndex((q) => q.id === selectedQuiz.id);
    if (index === quiz.length - 1) {
      setSelectedQuiz(quiz[0]);
    } else {
      setSelectedQuiz(quiz[index + 1]);
    }
  };

  const handleSubmit = () => {
    if (answer.length && quizObject) {
      if (answer.toLowerCase().includes(selectedQuiz.answer)) {
        dispatch(setQuizObjectLocally({ ...quizObject, solved: true }));
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "16px",
        boxShadow: "0 0px 5px #2dd5c4",
        padding: "24px",
        maxWidth: 560,
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "#ffeddf",
            fontSize: "16px",
          }}
        >
          If you are a friend I can share a secret or two. But to prove you are
          no stranger how about answering a question first :)
        </Typography>
      </Box>
      <Box sx={{ mt: 2, position: "relative" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#ffeddf",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#2dd5c4",
              textShadow: "0 0 5px #2dd5c4",
            }}
          >
            {"Q: "}
          </span>
          {selectedQuiz.question}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={changeQuestion}>
          <ReplayIcon />
        </Button>
      </Box>
      <Box sx={{ mt: 2, display: "flex", flexWrap: "nowrap", gap: "8px" }}>
        <InputBase
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          sx={{
            pl: 1,
            width: "100%",
            color: "#2dd5c4",
            borderRadius: "8px",
            border: "1px solid #2dd5c4",
            "&.Mui-error": {
              border: "1px solid #DA4E53",
            },
          }}
          placeholder="Answer"
          error={error}
          inputProps={{ "aria-label": "answer" }}
        />
        <Button
          variant={"contained"}
          sx={{ borderRadius: "8px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Quiz;
