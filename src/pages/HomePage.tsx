import React from "react";
import { Box } from "@mui/material";
import SectionHeroContent from "../components/homeSections/SectionHeroContent";
import DotPager from "../components/DotPager";
import SectionMeContent from "../components/homeSections/SectionMeContent";
import SectionWorkContent from "../components/homeSections/SectionWorkContent";
import SectionContactContent from "../components/homeSections/SectionContactContent";
import Footer from "../components/structure/Footer";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#1a385e" }}>
      <Box
        id={"section-hero"}
        sx={{
          height: "calc(200vh)",
          width: "100%",
          position: "relative",
        }}
      >
        <SectionHeroContent />
        <Box
          sx={{
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
        <SectionWorkContent />
      </Box>
      <Box
        sx={{
          backgroundImage: "linear-gradient(180deg, #1a385e, #115E84)",
          minHeight: "100vh",
        }}
        id={"section-contact"}
      >
        <SectionContactContent />
      </Box>
      <Box sx={{ backgroundColor: "blue" }}>
        <Footer />
      </Box>
      <Box
        sx={{
          position: "fixed",
          right: 8,
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
