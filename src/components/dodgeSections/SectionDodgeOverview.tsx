import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as OverviewSvg } from "../../assets/svg/overview-dodge.svg";

const SectionDodgeOverview: React.FC = () => {
  const theme = useTheme();
  const breakpointDown = useMediaQuery(theme.breakpoints.down(800));
  const [overviewHovered, setOverviewHovered] = useState<boolean>(false);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onMouseEnter={() => setOverviewHovered(true)}
    >
      <Container
        id={"section-dodge-overview"}
        maxWidth={"lg"}
        sx={{
          position: "relative",
          mb: "100px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={breakpointDown ? 12 : 6}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{ pr: breakpointDown ? undefined : 2 }}
          >
            <Grid
              container
              item
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 26,
                    color: "white",
                    textAlign: breakpointDown ? "center" : "left",
                    mb: 1,
                  }}
                >
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
                  <span style={{ color: "#2dd5c4" }}>{"Design: "}</span>
                  {`Adobe XD, Illustrator and the power of CSS animations.`}
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
                {`Source Code: `}
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
          <Grid container xs={breakpointDown ? 12 : 6} item>
            <Box
              id={"overviewFrame"}
              sx={{
                position: "relative",
                width: "100%",
                mt: breakpointDown ? "40px" : undefined,
              }}
            >
              <OverviewSvg
                className={overviewHovered ? "overviewHovered" : undefined}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionDodgeOverview;
