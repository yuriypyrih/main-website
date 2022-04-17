import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import animateScrollTo from "animated-scroll-to";

const DotPager: React.FC = () => {
  const [selectedDot, setSelectedDot] = useState<number>(0);

  const handleScrollEvent = () => {
    const position = window.scrollY;
    const offset = 300;
    const sectionContact = document.getElementById("section-contact");
    const sectionMyWork = document.getElementById("section-myWork");
    const sectionMe = document.getElementById("section-me");
    // Work from bottom to top
    if (!sectionContact || !sectionMyWork || !sectionMe) return;
    if (position + offset >= sectionContact.offsetTop) {
      setSelectedDot(3);
    } else if (position + offset >= sectionMyWork.offsetTop) {
      setSelectedDot(2);
    } else if (position + offset >= sectionMe.offsetTop) {
      setSelectedDot(1);
    } else {
      setSelectedDot(0);
    }

    // console.log(sectionMyWork?.offsetTop, position);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) animateScrollTo(element);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const getDot = (active?: boolean) => {
    return (
      <Box
        sx={{
          width: active ? 15 : 10,
          height: active ? 15 : 10,
          background: active ? "#2dd5c4" : "#ffeddf",
          boxShadow: "1px 1px 2px #001220",
          borderRadius: 99,
          cursor: "pointer",
        }}
      />
    );
  };
  return (
    <Box sx={{ position: "relative", width: 20 }}>
      <Grid
        container
        flexDirection={"column"}
        spacing={2}
        alignItems={"center"}
      >
        <Grid item onClick={() => handleScrollTo("section-hero")}>
          {getDot(selectedDot === 0)}
        </Grid>
        <Grid item onClick={() => handleScrollTo("section-me")}>
          {getDot(selectedDot === 1)}
        </Grid>
        <Grid item onClick={() => handleScrollTo("section-myWork")}>
          {getDot(selectedDot === 2)}
        </Grid>
        <Grid item onClick={() => handleScrollTo("section-contact")}>
          {getDot(selectedDot === 3)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DotPager;
