import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#001220" }}>
      <Container maxWidth={"lg"}>
        <Grid container sx={{ pt: 6, pb: 4 }} spacing={1}>
          <Grid container item xs={6}>
            <Grid item container xs={12}>
              <Typography
                onClick={() => navigate("/Blogs")}
                sx={{
                  fontSize: 16,
                  color: "#2dd5c4",
                  opacity: 0.7,
                  cursor: "pointer",
                  "&:hover": {
                    textShadow: "0 0 8px #2dd5c480",
                    opacity: 1,
                  },
                }}
              >
                <li>Dev Blogs</li>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                onClick={() => navigate("/Dodge")}
                sx={{
                  fontSize: 16,
                  color: "#2dd5c4",
                  opacity: 0.7,
                  cursor: "pointer",
                  "&:hover": {
                    textShadow: "0 0 8px #2dd5c480",
                    opacity: 1,
                  },
                }}
              >
                <li>Dodge Project</li>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: 50,
                color: "#2dd5c4",
                textShadow: "0 0 10px #2dd5c4",
                textAlign: "right",
              }}
            >{`</>`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: 16,
                color: "#2dd5c4",
                opacity: 0.6,
                textAlign: "right",
              }}
            >
              {`This website has been designed and developed by Yuriy Pyrih ©
                    2022. All right reserved.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
