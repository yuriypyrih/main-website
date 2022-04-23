import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as MeBackground } from "../../assets/svg/meSection.svg";

const SectionMeContent: React.FC = () => {
  const theme = useTheme();
  const breakpointDown = useMediaQuery(theme.breakpoints.down(720));

  return (
    <>
      <MeBackground
        style={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          opacity: 1,
        }}
      />
      <Container
        maxWidth={"lg"}
        sx={{
          height: "100vh",
          position: "relative",
          backgroundColor: breakpointDown ? "#1a385e" : undefined,
        }}
      >
        <Box
          sx={{
            background: "white",
            borderRadius: 99,
            position: breakpointDown ? "relative" : "absolute",
            top: breakpointDown ? "50px" : "50%",
            left: breakpointDown ? "50%" : "5%",
            transform: breakpointDown ? "translateX(-50%)" : "translateY(-50%)",
            width: breakpointDown ? "280px" : "360px",
            height: breakpointDown ? "280px" : "360px",
            border: "10px solid #1a385e",
            boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          <img
            alt={"me"}
            src={"/assets/Me.jpg"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <Grid
          container
          justifyContent={"flex-end"}
          sx={{
            position: "relative",
            width: "90%",
            left: "5%",
            top: breakpointDown ? "80px" : "50%",
            transform: breakpointDown ? undefined : "translateY(-50%)",
          }}
        >
          <Grid item xs={breakpointDown ? 12 : 5} container>
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
