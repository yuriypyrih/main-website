import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import animateScrollTo from "animated-scroll-to";

const SectionDodgeIntro: React.FC = () => {
  const handleScrollTo = () => {
    const element = document.getElementById("section-dodge-overview");
    const containerElement = document.getElementById("dodge-page");
    if (element && containerElement)
      animateScrollTo(element, { elementToScroll: containerElement });
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth={"md"}
        sx={{
          position: "relative",
        }}
      >
        <Grid container sx={{ maxWidth: 800, margin: "0 auto" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              {`The Dodge is a passion project of mine which I was brewing for a while now.
                 It was an old Java experimentation that got completely rebooted using modern Web Stack
                 Technologies such as TypeScript and much more!`}
            </Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"} sx={{ mt: 3 }}>
            <Grid
              item
              sx={{
                maxWidth: "700px",
                flex: 1,
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "55.25%", // ADJUST THIS WHEN YOU ARE READY
                }}
              >
                {/* @ts-ignore*/}
                <ReactPlayer
                  url="/video/dodge-preview.mp4"
                  width={"100%"}
                  height={"100%"}
                  className={"reactPlayerCustomClass"}
                  playing={true}
                  muted={true}
                  loop={true}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"} sx={{ mt: 3 }}>
            <Button
              sx={{
                boxShadow: "0 0 5px #2dd5c4",
                borderRadius: "99px",
                padding: "8px 16px",
              }}
              onClick={() =>
                window.open("https://dodge-game-yuriy.netlify.app", "_blank")
              }
            >
              <Typography sx={{ color: "white", fontSize: 18 }}>
                PLAY GAME
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} container sx={{ mt: 5 }}>
            <Grid item xs={12}>
              <Typography
                sx={{ color: "white", fontSize: 18, textAlign: "center" }}
              >
                {`Or Scroll Down to learn more`}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent={"center"}
              sx={{ mt: -1 }}
            >
              <IconButton onClick={handleScrollTo}>
                <ExpandMoreIcon
                  sx={{ width: "40px", height: "40px", color: "white" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionDodgeIntro;
