import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HolographicBackground from "../HolographicBackground";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type HeaderProps = {
  holographic?: boolean;
  fixed?: boolean;
  unlocked?: boolean;
};

const mutations = [
  "Secrets",
  "Se#re!ts",
  "S#*r$%ts",
  "S&^r$@!Ts",
  "Fr$^&*T$!",
  "F%$!e^*D$s",
  "F%&i#En$Ds",
  "Fr!3nD$",
  "Fr!3nDs",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "Friends",
  "AFriends",
  "Ab^Friends",
  "Ab@ut Friends",
  "About Friends",
  "About Friends",
  "About Friends",
  "About Friends",
  "About Friends",
  "About Friends",
  "About Friends",
  "About Friends",
  "About FE%s",
  "About M$e",
  "About Me",
];

const Header: React.FC<HeaderProps> = ({
  holographic = false,
  fixed = false,
  unlocked,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasUnlocked, setHasUnlocked] = useState<boolean>(false);
  const [secretTabName, setSecretTabName] = useState<string>(mutations[0]);

  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawer, setDrawer] = useState<boolean>(false);

  const { headerLoading } = useSelector((root: RootState) => root.app);

  useEffect(() => {
    if (unlocked && !hasUnlocked) {
      setHasUnlocked(true);
      const timeouts = mutations.map((mutation, index) =>
        setTimeout(() => setSecretTabName(mutation), index * 75 + 1000)
      );
      return () => {
        timeouts.every((t) => clearTimeout(t));
      };
    }
  }, [hasUnlocked, unlocked]);

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const getTitle = () => {
    const path = location.pathname;
    if (path.startsWith("/Home")) return "Home";
    else if (path.startsWith("/Secrets")) return "Secrets";
    else if (path.startsWith("/Blogs")) return "Dev Blogs";
    else if (path.startsWith("/Dodge")) return "DODGE PROJECT";
  };

  const getDrawer = () => (
    <Box
      sx={{
        width: 200,
        height: "100%",
        background: "linear-gradient(300deg, #001220 0%,  #115E84 100%)",
        boxShadow: "0 5px 5px black",
      }}
      role="presentation"
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <List>
        <ListItem
          sx={{ pb: "56px", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton onClick={() => setDrawer(false)} sx={{ p: 0 }}>
            <ChevronLeftIcon
              style={{ color: "white", width: 40, height: 40 }}
            />
          </IconButton>
        </ListItem>
        <ListItem onClick={() => navigate("/Home")}>
          <Typography
            sx={{
              fontSize: "18px",
              color: isActive("/Home") ? "#2dd5c4" : "#ffeddf",
            }}
          >
            {"HOME"}
          </Typography>
        </ListItem>
        <ListItem onClick={() => navigate("/Secrets")}>
          <Typography
            sx={{
              fontSize: "18px",
              color: isActive("/Blogs") ? "#2dd5c4" : "#ffeddf",
            }}
          >
            {"Secrets"}
          </Typography>
        </ListItem>
        <ListItem onClick={() => navigate("/Blogs")}>
          <Typography
            sx={{
              fontSize: "18px",
              color: isActive("/Blogs") ? "#2dd5c4" : "#ffeddf",
            }}
          >
            {"DEV BLOGS"}
          </Typography>
        </ListItem>
        <ListItem button onClick={() => navigate("/Dodge")}>
          <Typography
            sx={{
              fontSize: "18px",
              color: isActive("/Dodge") ? "#2dd5c4" : "#ffeddf",
            }}
          >
            {"DODGE PROJECT"}
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  const getResponsiveHeader = () => {
    if (xsDown) {
      return (
        <Container sx={{ zIndex: 5, userSelect: "none" }}>
          <Grid container wrap={"nowrap"} alignItems={"center"}>
            <Grid item>
              <IconButton onClick={() => setDrawer(true)}>
                <MenuIcon style={{ color: "#2dd5c4", width: 40, height: 40 }} />
              </IconButton>
            </Grid>
            <Grid item sx={{ flex: 1, pr: "56px" }}>
              <Typography
                sx={{
                  fontSize: 32,
                  color: "#ffeddf",
                  textAlign: "center",
                }}
              >
                {getTitle()}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      );
    } else {
      return (
        <Container maxWidth={"lg"} sx={{ zIndex: 5, userSelect: "none" }}>
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
              <Grid item onClick={() => navigate("/Secrets")}>
                <Typography
                  sx={{
                    fontSize: 24,
                    color: isActive("/Secrets") ? "#2dd5c4" : "#ffeddf",
                    cursor: "pointer",
                    "&:hover": {
                      textShadow: "0 0 8px #2dd5c480",
                    },
                  }}
                >
                  {secretTabName}
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
      );
    }
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
        {getResponsiveHeader()}
      </Box>
      <Drawer anchor={"left"} open={drawer} onClose={() => setDrawer(false)}>
        {getDrawer()}
      </Drawer>
    </Box>
  );
};

export default Header;
