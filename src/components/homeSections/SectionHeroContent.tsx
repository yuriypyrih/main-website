import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HolographicBackground from "../HolographicBackground";
import Header from "../structure/Header";
import { ReactComponent as FrameSvg } from "../../assets/svg/minotr_illustration.svg";

const SectionHeroContent: React.FC = () => {
  const theme = useTheme();
  const breakpointDown = useMediaQuery(theme.breakpoints.down(940));
  const xsDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [heroHovered, setHeroHovered] = useState<boolean>(false);

  useEffect(() => {
    if (heroHovered) {
      const timer = setTimeout(() => {
        setHeroHovered(false);
      }, 11000);
      return () => clearTimeout(timer);
    }
  }, [heroHovered]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.classList.add("disableScrollbar");
    return () => {
      const body = document.querySelector("body");
      if (body) body.classList.remove("disableScrollbar");
    };
  }, []);

  return (
    <>
      <Box sx={{ position: "absolute", width: "100%" }}>
        <HolographicBackground />
      </Box>
      <Header />
      <Container
        maxWidth={"lg"}
        sx={{
          width: "100%",
          height: "calc(100vh - 100px)",
          position: "relative",
          // top: "10vh",
          userSelect: "none",
          textAlign: xsDown ? "center" : "left",
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: xsDown ? undefined : "calc(50%)",
            transform: xsDown ? undefined : "translateY(-50%)",
          }}
        >
          <Grid container wrap={"nowrap"} justifyContent={"space-around"}>
            <Grid item>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontSize: breakpointDown ? 42 : 56,
                    color: "#2dd5c4",
                    fontWeight: "bold",
                    textShadow: "5px 5px 5px black",
                  }}
                >
                  INTERACTIVE EXPERIENCES
                </Typography>
                <Typography
                  sx={{
                    fontSize: breakpointDown ? 32 : 42,
                    color: "#ffeddf",
                    fontStyle: "italic",
                    textShadow: "2px 2px 5px black",
                  }}
                >
                  People ignore design that
                </Typography>
                <Typography
                  sx={{
                    fontSize: breakpointDown ? 32 : 42,
                    color: "#ffeddf",
                    fontStyle: "italic",
                    textShadow: "2px 2px 5px black",
                  }}
                >
                  ignores people
                </Typography>
              </Box>
            </Grid>
            <Grid item />
          </Grid>
          <Grid
            container
            wrap={"nowrap"}
            justifyContent={"space-around"}
            sx={{
              position: "relative",
              pl: xsDown ? "10px" : undefined,
              top: xsDown ? "60px" : breakpointDown ? "-20px" : "-40px",
            }}
          >
            {!xsDown && <Grid item />}
            <Grid item xs={12} sm={6} container justifyContent={"center"}>
              <Box
                id={"heroFrame"}
                sx={{
                  position: "relative",
                  width: xsDown ? "80%" : "100%",
                }}
              >
                <FrameSvg
                  onMouseEnter={() => setHeroHovered(true)}
                  className={heroHovered ? "heroFrameHovered" : undefined}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SectionHeroContent;
