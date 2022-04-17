import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ReactComponent as FrameSvg } from "../assets/svg/hero-frame.svg";
import HeroBackground from "../components/HeroBackground";
import Header from "../components/Header";
import DotPager from "../components/DotPager";

const HomePage: React.FC = () => {
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
    <Box>
      <Box
        id={"section-hero"}
        sx={{
          backgroundColor: "#E0BBE4",
          height: "calc(100vh)",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute" }}>
          <HeroBackground />
        </Box>
        <Header />
        <Box
          sx={{
            position: "fixed",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <DotPager />
        </Box>

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
              top: "20%",
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
              bottom: "20%",
              width: "40%",
            }}
          >
            <FrameSvg
              onMouseEnter={() => setHeroHovered(true)}
              className={heroHovered ? "heroFrameHovered" : undefined}
            />
          </Box>
        </Container>
      </Box>

      <Box
        sx={{ backgroundColor: "#957DAD", minHeight: "100vh" }}
        id={"section-me"}
      >
        About Me Section
      </Box>
      <Box
        sx={{ backgroundColor: "#D291BC", minHeight: "100vh" }}
        id={"section-myWork"}
      >
        My Work Section
      </Box>
      <Box
        sx={{
          backgroundColor: "#FEC8D8",
          minHeight: "calc(100vh + 200px) !important",
        }}
        id={"section-contact"}
      >
        Contact Section
        <Box sx={{ backgroundColor: "white" }}>Footer</Box>
      </Box>
    </Box>
  );
};

export default HomePage;
