import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeroContent from "../components/sections/SectionHeroContent";
import { ReactComponent as MeBackground } from "../assets/svg/meSection.svg";
import DotPager from "../components/DotPager";
import SectionMeContent from "../components/sections/SectionMeContent";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Box
        id={"section-hero"}
        sx={{
          backgroundColor: "#E0BBE4",
          height: "calc(200vh)",
          position: "relative",
        }}
      >
        <SectionHeroContent />
        <Box
          sx={{
            // backgroundColor: "#957DAD",
            position: "absolute",
            minHeight: "100vh",
            width: "100%",
            top: "100vh",
          }}
          id={"section-me"}
        >
          <SectionMeContent />
        </Box>
      </Box>

      <Box
        sx={{ backgroundColor: "#1a385e", minHeight: "100vh" }}
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
    </Box>
  );
};

export default HomePage;
