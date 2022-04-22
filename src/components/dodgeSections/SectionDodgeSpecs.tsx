import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const SectionDodgeSpecs: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mb: "100px",
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{ fontSize: 36, color: "white", textAlign: "center" }}
            >
              {`Gameplay Overview`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ fontSize: 18, color: "white", textAlign: "center" }}
            >
              {`Survive your way through the levels by dodging the enemies and collecting all
                  the stars in your path. Note that the enemies are color coded and have behavioral patterns that you
                  can learn and potentially abuse. You can use your powerful relics to beat all the bosses and ultimately 
                prove your worth in the Chaos dungeons. Your glory will be displayed in the public Leaderboards!`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ fontSize: 18, color: "white", textAlign: "center" }}
            >
              {`Stars are everything and the most valuable resource that you can collect by just playing the game. 
              They can be used to unlock levels, relics,
              and all the future content like cosmetics.
              `}
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={4} sx={{ mt: "10px" }}>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 24, color: "white", mb: 0.5 }}>
                {`Relics`}
              </Typography>
              <Typography sx={{ fontSize: 18, color: "white" }}>
                {`Are additional power-ups that you can equip during the game with various effects that
                will help you to survive the challenges. Each level is unique and you might need to
                adapt and plan accordingly. `}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 24, color: "white", mb: 0.5 }}>
                {`Chaos Dungeons`}
              </Typography>
              <Typography sx={{ fontSize: 18, color: "white" }}>
                {`Starts as your normal level except they are more.. Chaotic.`}
              </Typography>
              <Typography sx={{ fontSize: 18, color: "white" }}>
                {`Once you get the last star instead of the usual Boss spawning you 
                will enter into a race to survive as long as you can.`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionDodgeSpecs;
