import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BlogPost from "../components/BlogPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog } from "../redux/slices/appSlice";

const SingleBlogPage: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const breakpointDown = useMediaQuery(theme.breakpoints.down(1200));
  const { assets, selectedBlog } = useSelector((root: RootState) => root.app);

  useEffect(() => {
    if (!selectedBlog && params.id) {
      dispatch(getSingleBlog({ id: params.id }));
    }
  }, [dispatch]);

  const getTitle = () => {
    if (selectedBlog && selectedBlog.fields?.title) {
      const title = selectedBlog.fields.title;
      if (title.length < 42) {
        return title;
      } else {
        return title.slice(0, 40) + "..";
      }
    } else return "Blog";
  };

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
            minHeight: "100vh",
          }}
        >
          <Container maxWidth={"lg"} sx={{ my: 2 }}>
            <Grid container>
              <Grid item onClick={() => navigate("/Blogs")}>
                <Typography
                  sx={{
                    color: "#2dd5c4",
                    fontSize: 20,
                    fontWeight: 200,
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {`Blogs > ${getTitle()}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              wrap={"nowrap"}
              alignItems={"flex-start"}
              sx={{ mt: 8 }}
            >
              <Grid item container sx={{ flex: 1, mb: "100px" }}>
                <Grid item container xs={12} spacing={3}>
                  {selectedBlog && (
                    <Grid item xs={12} sx={{ mb: 2 }}>
                      <BlogPost blog={selectedBlog} assets={assets} />
                    </Grid>
                  )}
                </Grid>
              </Grid>
              {!breakpointDown && (
                <Grid item sx={{ ml: 4 }}>
                  <Box
                    sx={{
                      width: 260,
                      height: 600,
                      background: "grey",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SingleBlogPage;
