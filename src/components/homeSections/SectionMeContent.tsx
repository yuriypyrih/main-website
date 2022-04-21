import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactComponent as MeBackground } from "../../assets/svg/meSection.svg";

const SectionMeContent: React.FC = () => {
  return (
    <>
      <MeBackground
        style={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          opacity: 1,
          fill: "red",
        }}
      />
      <Container maxWidth={"lg"} sx={{ height: "100vh", position: "relative" }}>
        <Box
          sx={{
            background: "white",
            borderRadius: 99,
            position: "absolute",
            top: "25%",
            left: "5%",
            width: 360,
            height: 360,
            border: "10px solid #1a385e",
            boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          <img
            alt={"me"}
            src={"/assets/Me.jpg"}
            style={{ width: 360, height: 360, objectFit: "cover" }}
          />
        </Box>
        <Grid
          container
          justifyContent={"flex-end"}
          sx={{
            position: "relative",
            width: "100%",
            top: "calc(30vh + 100px)",
          }}
        >
          <Grid item sx={{ maxWidth: "48%", pl: "calc(5vw + 20px)" }} container>
            <Grid item xs={12}>
              <Typography sx={{ color: "#ffeddf", fontSize: 20 }}>
                {`Hello, my name is Yuriy Pyrih`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: "#ffeddf", fontSize: 20 }}>
                {`and I am a `}
                <span style={{ color: "#2dd5c4" }}>
                  Full Stack Web Developer
                </span>
                .
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
                {`I have a keen eye for Interactive Design as my passion is to bridge the realms of Reality and Imagination!`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SectionMeContent;
