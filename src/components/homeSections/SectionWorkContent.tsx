import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactComponent as FooterSvg } from "../../assets/svg/layered-waves-haikei.svg";
import { ReactComponent as DeveloperSvg } from "../../assets/svg/developer-illustation.svg";
import { ReactComponent as SkillsSvg } from "../../assets/svg/skills.svg";

const SectionWorkContent: React.FC = () => {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ py: "60px" }}>
        <Grid container>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6} container>
              <Grid item xs={12}>
                <Typography sx={{ color: "#ffeddf", fontSize: 48 }}>
                  Work
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
                  {`I have worked on numerous applications from small passion projects such as the `}
                  <span
                    style={{
                      color: "#2dd5c4",
                      cursor: "pointer",
                    }}
                  >
                    Dodge Project
                  </span>
                  {` to fully blown production scale deployments with thousands of users.`}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
                  {`You can learn more by checking my `}
                  <span
                    style={{
                      color: "#2dd5c4",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    GitHub Account
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container justifyContent={"center"}>
              <Box sx={{ position: "relative", width: "80%" }}>
                <DeveloperSvg />
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2} sx={{ mt: "10vh" }}>
            <Grid
              item
              xs={6}
              sx={{ position: "relative" }}
              container
              // justifyContent={"center"}
            >
              <Box sx={{ width: "80%" }}>
                <SkillsSvg />
              </Box>
            </Grid>
            <Grid item xs={6} container spacing={1}>
              <Grid item xs={12}>
                <Typography sx={{ color: "#ffeddf", fontSize: 48 }}>
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={12} container spacing={0.5}>
                <Grid item xs={12}>
                  <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
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
                  <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
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
                  <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
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
                  <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
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
                  <Typography sx={{ color: "#ffeddf", fontSize: 18 }}>
                    <span
                      style={{
                        color: "#2dd5c4",
                      }}
                    >
                      OTHERS:
                    </span>
                    {" GDPR Proficiency, Excellent Planner, Good Communicator"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <FooterSvg style={{ height: 400, width: "100%", marginTop: 40 }} />
    </>
  );
};

export default SectionWorkContent;
