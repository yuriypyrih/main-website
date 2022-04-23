import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as DodgeClosureSvg } from "../../assets/svg/closure-dodge.svg";

const SectionDodgeClosure: React.FC = () => {
  const theme = useTheme();
  const breakpointDown = useMediaQuery(theme.breakpoints.down(800));

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
              sx={{
                fontSize: breakpointDown ? 30 : 36,
                color: "white",
                textAlign: "center",
              }}
            >
              {`Last Words`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: breakpointDown ? 16 : 18,
                color: "white",
                textAlign: breakpointDown ? "left" : "center",
              }}
            >
              {`This project is just a fun challenge for me that puts my creativity to the test. 
              It also serves as a playground to try new tools and discovering best development practices.
              While I am aware the scope is limited and I do not expect to generate revenue from this
               I am still planning to add new features such as elaborate settings system, more levels and relics,
                 payment system, various cosmetics and so much more! `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid container justifyContent={"center"}>
        <Grid item sx={{ maxWidth: "700px", flex: 1, my: "80px" }}>
          <DodgeClosureSvg />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionDodgeClosure;
