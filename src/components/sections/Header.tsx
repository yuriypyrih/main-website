import React from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HolographicBackground from "../HolographicBackground";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type HeaderProps = {
  holographic?: boolean;
  fixed?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  holographic = false,
  fixed = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { headerLoading } = useSelector((root: RootState) => root.app);

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        position: fixed ? "fixed" : undefined,
      }}
    >
      {holographic && (
        <HolographicBackground height={"100px"} id={"headerParticles"} />
      )}
      <Box
        sx={{
          color: "white",
          width: "100%",
          height: "100px",
          position: "absolute",
          top: 0,
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);",
        }}
      >
        <Container maxWidth={"lg"} sx={{ zIndex: 5 }}>
          <Grid container justifyContent={"space-between"} wrap={"nowrap"}>
            <Grid
              item
              container
              spacing={4}
              sx={{ position: "relative", flex: 0 }}
              wrap={"nowrap"}
            >
              <Grid item onClick={() => navigate("/Home")}>
                <Typography
                  sx={{
                    fontSize: 24,
                    color: isActive("/Home") ? "#2dd5c4" : "#ffeddf",
                    cursor: "pointer",
                    "&:hover": {
                      textShadow: "0 0 8px #2dd5c480",
                    },
                  }}
                >
                  Home
                </Typography>
              </Grid>
              <Grid item onClick={() => navigate("/Blogs")}>
                <Typography
                  sx={{
                    fontSize: 24,
                    color: isActive("/Blogs") ? "#2dd5c4" : "#ffeddf",
                    cursor: "pointer",
                    "&:hover": {
                      textShadow: "0 0 8px #2dd5c480",
                    },
                  }}
                >
                  Dev Blogs
                </Typography>
              </Grid>
              {headerLoading && (
                <Box
                  sx={{
                    position: "absolute",
                    right: "-60px",
                    top: "30px",
                  }}
                >
                  <CircularProgress sx={{ color: "#2dd5c4" }} />
                </Box>
              )}
            </Grid>
            <Grid item onClick={() => navigate("/Dodge")}>
              <Typography
                sx={{
                  fontSize: 24,
                  color: isActive("/Dodge") ? "#2dd5c4" : "#ffeddf",
                  cursor: "pointer",
                  textShadow: isActive("/Dodge")
                    ? "0 0 10px #2dd5c4FF"
                    : undefined,
                  "&:hover": {
                    textShadow: "0 0 8px #2dd5c480",
                  },
                }}
              >
                DODGE PROJECT
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
