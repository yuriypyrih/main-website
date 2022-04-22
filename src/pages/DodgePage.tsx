import React from "react";
import { Box } from "@mui/material";
import Header from "../components/structure/Header";
import Footer from "../components/structure/Footer";
import SectionDodgeIntro from "../components/dodgeSections/SectionDodgeIntro";
import SectionDodgeOverview from "../components/dodgeSections/SectionDodgeOverview";
import SectionDodgeClosure from "../components/dodgeSections/SectionDodgeClosure";
import SectionDodgeSpecs from "../components/dodgeSections/SectionDodgeSpecs";

const DodgePage: React.FC = () => {
  return (
    <Box>
      <Header holographic fixed />
      <Box
        sx={{
          position: "relative",
          top: "100px",
          minHeight: "calc(100vh - 100px)",
          maxHeight: "calc(100vh - 100px)",
          background: "linear-gradient(180deg, #001220, #115E84)",
          overflow: "auto",
        }}
        id={"dodge-page"}
      >
        <SectionDodgeIntro />
        <SectionDodgeOverview />
        <SectionDodgeSpecs />
        <SectionDodgeClosure />
        <Footer />
      </Box>
    </Box>
  );
};

export default DodgePage;
