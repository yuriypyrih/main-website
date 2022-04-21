import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const SectionContactContent: React.FC = () => {
  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{
          position: "relative",
          top: "50vh",
          transform: "translateY(-50%)",
        }}
      >
        <Box className={"contactMe"} sx={{ px: "42px", py: "62px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{ fontSize: 42, color: "#1a385e", fontWeight: "bold" }}
              >
                CONTACT ME
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
              container
              wrap={"nowrap"}
              alignItems={"center"}
            >
              <EmailIcon
                style={{
                  color: "#1a385e",
                  width: 30,
                  height: 30,
                  marginRight: "8px",
                }}
              />
              <Typography
                sx={{ fontSize: 28, color: "#1a385e", fontWeight: "bold" }}
              >
                yuriypyrih@gmail.com
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
              container
              wrap={"nowrap"}
              alignItems={"center"}
            >
              <LinkedInIcon
                style={{
                  color: "#1a385e",
                  width: 30,
                  height: 30,
                  marginRight: "8px",
                }}
              />
              <Typography
                sx={{ fontSize: 28, color: "#1a385e", fontWeight: "bold" }}
              >
                Linkedin
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
              container
              wrap={"nowrap"}
              alignItems={"center"}
            >
              <GitHubIcon
                style={{
                  color: "#1a385e",
                  width: 30,
                  height: 30,
                  marginRight: "8px",
                }}
              />
              <Typography
                sx={{ fontSize: 28, color: "#1a385e", fontWeight: "bold" }}
              >
                GitHub
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SectionContactContent;
