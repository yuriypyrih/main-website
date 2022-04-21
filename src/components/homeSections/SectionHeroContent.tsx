import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import HolographicBackground from "../HolographicBackground";
import Header from "../structure/Header";
import { ReactComponent as FrameSvg } from "../../assets/svg/minotr_illustration.svg";

const SectionHeroContent: React.FC = () => {
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
          height: "100%",
          position: "relative",
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            top: "5%",
            width: "800px",
          }}
        >
          <Typography
            sx={{
              fontSize: 56,
              color: "#2dd5c4",
              fontWeight: "bold",
              textShadow: "5px 5px 5px black",
            }}
          >
            INTERACTIVE EXPERIENCES
          </Typography>
          <Typography
            sx={{
              fontSize: 42,
              color: "#ffeddf",
              fontStyle: "italic",
              textShadow: "2px 2px 5px black",
            }}
          >
            People ignore design that
          </Typography>
          <Typography
            sx={{
              fontSize: 42,
              color: "#ffeddf",
              fontStyle: "italic",
              textShadow: "2px 2px 5px black",
            }}
          >
            ignores people
          </Typography>
        </Box>
        <Box
          id={"heroFrame"}
          sx={{
            position: "absolute",
            right: "10%",
            top: "15%",
            width: "40%",
          }}
        >
          <FrameSvg
            onMouseEnter={() => setHeroHovered(true)}
            className={heroHovered ? "heroFrameHovered" : undefined}
          />
        </Box>
      </Container>
    </>
  );
};

export default SectionHeroContent;