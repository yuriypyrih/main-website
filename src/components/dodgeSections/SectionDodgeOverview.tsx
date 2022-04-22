import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const SectionDodgeOverview: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      id={"section-dodge-overview"}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={6}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{ pr: 2 }}
          >
            <Grid
              container
              item
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Grid item>
                <Typography sx={{ fontSize: 26, color: "white" }}>
                  Web Stack Tools
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 18, color: "white" }}>
                  <span style={{ color: "#2dd5c4" }}>
                    {"Programming Language: "}
                  </span>
                  {`TypeScript (aka JavaScript on steroids).`}
                </Typography>
                <Typography sx={{ fontSize: 18, color: "white" }}>
                  <span style={{ color: "#2dd5c4" }}>{"Game Engine: "}</span>
                  {`Custom made engine using HTML Canvas and RequestAnimationFrame for the game loop.`}
                </Typography>
                <Typography sx={{ fontSize: 18, color: "white" }}>
                  <span style={{ color: "#2dd5c4" }}>{"Front End: "}</span>
                  {`ReactJs, Redux (RTK), Material-UI, Axios.`}
                </Typography>
                <Typography sx={{ fontSize: 18, color: "white" }}>
                  <span style={{ color: "#2dd5c4" }}>{"Back End: "}</span>
                  {`NodeJs (ExpressJS), MongoDB, JWT Authentication.`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "white",
                  "&:hover span": { textDecoration: "underline" },
                }}
              >
                {`I am planning to write a `}
                <span style={{ color: "#2dd5c4" }}>{"Dev Blog"}</span>
                {` that dives deeper into each step of its creation process and the tools used.`}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "white",
                  "&:hover span": { textDecoration: "underline" },
                }}
              >
                {`Github: `}
                <span
                  style={{ color: "#2dd5c4", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://github.com/yuriypyrih/DodgeReactApp",
                      "_blank"
                    )
                  }
                >
                  {"github.com/yuriypyrih/DodgeReactApp"}
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={6} item>
            <Box
              sx={{
                width: "100%",
                height: "400px",
                background: "grey",
                borderRadius: 8,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionDodgeOverview;
