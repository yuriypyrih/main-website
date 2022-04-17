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
            position: "relative",
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
            alt={"my-photo"}
            src={"/assets/Me.jpg"}
            style={{ width: 360, height: 360, objectFit: "cover" }}
          />

          {/*<AccountCircleIcon style={{ width: 360, height: 360 }} />*/}
        </Box>
        <Grid
          container
          justifyContent={"flex-end"}
          // sx={{ textAlign: "right" }}
        >
          <Grid item xs={6} container>
            <Grid item xs={12} sx={{ pl: "25%" }}>
              <Typography sx={{ color: "#ffeddf", fontSize: 20 }}>
                {`Hello! my name is Yuriy Pyrih`}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ pl: "25%" }}>
              <Typography sx={{ color: "#ffeddf", fontSize: 20 }}>
                {`and I am `}
                <span style={{ color: "#2dd5c4" }}>
                  Full Stack Web Developer
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ pl: "20%", mt: "16px" }}>
              <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
                {`I have a keen eye for Interactive Design as my passion is to bridge the realms of Reality and Imagination`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SectionMeContent;
