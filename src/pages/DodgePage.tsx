import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../components/structure/Header";
import Footer from "../components/structure/Footer";
import ReactPlayer from "react-player";

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
      >
        <Box
          sx={{
            minHeight: "calc(100vh - 100px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Container
            maxWidth={"md"}
            sx={{
              position: "relative",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  sx={{ color: "white", fontSize: 18, textAlign: "center" }}
                >
                  {
                    "So this is the Dodge Project So this is the Dodge Project So this is the Dodge Project So this is the Dodge Project So this is the Dodge Project"
                  }
                </Typography>
              </Grid>
              <Grid item xs={12} container justifyContent={"center"}>
                <Grid
                  item
                  sx={{
                    maxWidth: "700px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "55.25%", // ADJUST THIS WHEN YOU ARE READY
                    }}
                  >
                    {/* @ts-ignore*/}
                    <ReactPlayer
                      url="/video/dodge-preview.mov"
                      width={"100%"}
                      height={"100%"}
                      className={"reactPlayerCustomClass"}
                      playing={true}
                      muted={true}
                      loop={true}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default DodgePage;
