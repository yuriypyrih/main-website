import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SectionHeroContent from "../components/sections/SectionHeroContent";
import DotPager from "../components/DotPager";
import SectionMeContent from "../components/sections/SectionMeContent";
import SectionWorkContent from "../components/sections/SectionWorkContent";
import SectionContactContent from "../components/sections/SectionContactContent";
import Footer from "../components/sections/Footer";

const HomePage: React.FC = () => {
  console.log("but why");
  useEffect(() => {
    console.log("Testing Home");
  }, []);
  return (
    <Box>
      <Box
        id={"section-hero"}
        sx={{
          backgroundColor: "#E0BBE4",
          height: "calc(200vh)",
          width: "100%",
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
        <SectionWorkContent />
      </Box>
      <Box
        sx={{
          // backgroundColor: "#1a385e",
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
