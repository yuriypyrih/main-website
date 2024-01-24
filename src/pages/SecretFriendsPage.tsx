import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Header from "../components/structure/Header";
import Footer from "../components/structure/Footer";
import Quiz from "../components/quiz/Quiz";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SecretFriendsPage: React.FC = () => {
  const { quizObject } = useSelector((root: RootState) => root.app);

  const getQuiz = () => {
    return (
      <Box
        sx={{ mt: "200px", display: "flex", justifyContent: "space-around" }}
      >
        <Quiz />
      </Box>
    );
  };

  const getSecrets = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid blue",
              borderRadius: "16px",
              width: 300,
              height: 500,
            }}
          >
            <Typography>General info</Typography>
          </Box>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid blue",
              borderRadius: "16px",
              width: 300,
              height: 500,
            }}
          >
            Links and Spotify
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid blue",
              borderRadius: "16px",
              width: 300,
              height: 500,
            }}
          >
            Favourite Movies
          </Box>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid blue",
              borderRadius: "16px",
              width: 300,
              height: 500,
            }}
          >
            Favourite Series
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Header
        holographic
        fixed
        unlocked={quizObject ? quizObject.solved : undefined}
      />
      <Box
        sx={{
          position: "relative",
          top: "100px",
          minHeight: "calc(100vh - 100px)",
          maxHeight: "calc(100vh - 100px)",
          background: "linear-gradient(180deg, #001220, #115E84)",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
          }}
        >
          <Container maxWidth={"lg"} sx={{ my: 2 }}>
            {quizObject && quizObject.solved ? getSecrets() : getQuiz()}
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SecretFriendsPage;
