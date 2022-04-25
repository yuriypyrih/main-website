import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as FooterSvg } from "../../assets/svg/layered-waves-haikei.svg";
import { ReactComponent as DeveloperSvg } from "../../assets/svg/developer-illustation.svg";
import { ReactComponent as SkillsSvg } from "../../assets/svg/skills.svg";

const SectionWorkContent: React.FC = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const breakpointDown = useMediaQuery(theme.breakpoints.down(800));

  return (
    <>
      <Container maxWidth={"lg"} sx={{ py: "60px" }}>
        <Grid container>
          <Grid container item xs={12} spacing={2}>
            <Grid
              item
              xs={breakpointDown ? 12 : 6}
              container
              direction={"column"}
              justifyContent={"flex-start"}
            >
              <Grid item>
                <Typography
                  sx={{
                    color: "#ffeddf",
                    fontSize: 48,
                    textAlign: breakpointDown ? "center" : "left",
                  }}
                >
                  Work
                </Typography>
              </Grid>
              <Grid item sx={{ mt: 1 }}>
                <Typography
                  sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                >
                  {`I design, develop and deploy applications both for desktop and mobile using cutting edge 
                  software tools in order to deliver the best digital experience!`}
                </Typography>
              </Grid>
              <Grid item sx={{ mt: 1 }}>
                <Typography
                  sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                >
                  {`I'm fascinated with all sorts of software development and my hobbies include
                   AR/XR integrations and Game Dev.`}
                </Typography>
              </Grid>
              <Grid item sx={{ mt: 1 }}>
                <Typography
                  sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                >
                  {`More about my projects in my `}
                  <span
                    style={{
                      color: "#2dd5c4",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open("https://github.com/yuriypyrih", "_blank")
                    }
                  >
                    GitHub Account
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={breakpointDown ? 12 : 6}
              container
              justifyContent={"center"}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "80%",
                  pt: breakpointDown ? "40px" : undefined,
                }}
              >
                <DeveloperSvg />
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2} sx={{ mt: "10vh" }}>
            {!breakpointDown && (
              <Grid
                item
                xs={6}
                sx={{
                  position: "relative",
                }}
                container
              >
                <Box sx={{ width: "80%" }}>
                  <SkillsSvg />
                </Box>
              </Grid>
            )}
            <Grid item xs={breakpointDown ? 12 : 6} container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: "#ffeddf",
                    fontSize: 48,
                    textAlign: breakpointDown ? "center" : "left",
                  }}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={12} container spacing={0.5}>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                  >
                    <span
                      style={{
                        color: "#2dd5c4",
                      }}
                    >
                      FRONT:
                    </span>
                    {" Html/Css(Sass), JavaScript(TypeScript), ReactJS"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                  >
                    <span
                      style={{
                        color: "#2dd5c4",
                      }}
                    >
                      BACK:
                    </span>
                    {" NodeJs(ExpressJS), MongoDB, PostgreSQL"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                  >
                    <span
                      style={{
                        color: "#2dd5c4",
                      }}
                    >
                      DESIGN:
                    </span>
                    {" Figma, Adobe XD, Illustrator, Photoshop"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                  >
                    <span
                      style={{
                        color: "#2dd5c4",
                      }}
                    >
                      TECH:
                    </span>
                    {" Web Sockets, Ionic, i18n Multi language support"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#ffeddf", fontSize: xsDown ? 16 : 20 }}
                  >
                    <span
                      style={{
                        color: "#2dd5c4",
                      }}
                    >
                      OTHER:
                    </span>
                    {" GDPR Proficiency, Excellent Planner & Communicator"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {breakpointDown && (
              <Grid item xs={12} sx={{ position: "relative" }} container>
                <Box sx={{ width: "100%", mt: "40px" }}>
                  <SkillsSvg />
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
      <FooterSvg
        style={{
          height: 400,
          width: "100%",
          marginTop: 40,
        }}
      />
    </>
  );
};

export default SectionWorkContent;
