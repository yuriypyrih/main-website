import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        color: "white",
        width: "100%",
        height: "100px",
        position: "relative",
        top: 0,
        whiteSpace: "nowrap",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{ pt: 2 }}
          wrap={"nowrap"}
        >
          <Grid item container spacing={4}>
            <Grid item>
              <Typography
                sx={{ fontSize: 24, color: "#2dd5c4", cursor: "pointer" }}
              >
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: 24, color: "#ffeddf", cursor: "pointer" }}
              >
                Dev Blogs
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              sx={{ fontSize: 24, color: "#ffeddf", cursor: "pointer" }}
            >
              DODGE PROJECT
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;