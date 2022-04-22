import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../components/structure/Header";
import Footer from "../components/structure/Footer";
import BlogPost from "../components/BlogPost";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/slices/appSlice";
import { RootState } from "../redux/store";
import CustomSearchbar from "../components/common/CustomSearchbar";
import { useDebounce } from "../hooks/useDebounce";
import DogeAd from "../components/DogeAd";

enum TABS {
  ALL = "all",
  DEV = "dev",
  DESIGN = "design",
  BUSINESS = "business",
}

const BlogPage: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down(760));
  const breakpointDown = useMediaQuery(theme.breakpoints.down(1200));
  const [search, setSearch] = useState<string>("");
  const actualSearch = useDebounce(search, 1200);
  const [tab, setTab] = useState<TABS>(TABS.ALL);
  const { blogs, assets } = useSelector((root: RootState) => root.app);

  useEffect(() => {
    dispatch(getBlogs({ tab, search: actualSearch }));
  }, [dispatch, tab, actualSearch]);

  const getFilterTags = () => {
    return (
      <Grid
        container
        spacing={2}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <Grid item onClick={() => setTab(TABS.ALL)}>
          <Typography
            sx={{
              color: tab === TABS.ALL ? "#2dd5c4" : "#2dd5c460",
              fontSize: 20,
            }}
          >
            ALL
          </Typography>
        </Grid>
        <Grid item onClick={() => setTab(TABS.DEV)}>
          <Typography
            sx={{
              color: tab === TABS.DEV ? "#2dd5c4" : "#2dd5c460",
              fontSize: 20,
            }}
          >
            DEV
          </Typography>
        </Grid>
        <Grid item onClick={() => setTab(TABS.DESIGN)}>
          <Typography
            sx={{
              color: tab === TABS.DESIGN ? "#2dd5c4" : "#2dd5c460",
              fontSize: 20,
            }}
          >
            DESIGN
          </Typography>
        </Grid>
        <Grid item onClick={() => setTab(TABS.BUSINESS)}>
          <Typography
            sx={{
              color: tab === TABS.BUSINESS ? "#2dd5c4" : "#2dd5c460",
              fontSize: 20,
            }}
          >
            BUSINESS
          </Typography>
        </Grid>
      </Grid>
    );
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
          <Container maxWidth={"lg"}>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ my: 2 }}
            >
              <Grid item>{getFilterTags()}</Grid>
              <Grid item>
                <CustomSearchbar
                  search={search}
                  setSearch={setSearch}
                  shrinkable
                />
              </Grid>
            </Grid>
            <Grid
              container
              wrap={"nowrap"}
              alignItems={"flex-start"}
              sx={{ mt: 4 }}
            >
              <Grid item container sx={{ flex: 1, mb: "100px" }}>
                <Grid item container xs={12} spacing={3}>
                  {blogs.length ? (
                    blogs.map((blog, index) => (
                      <Grid
                        item
                        key={index}
                        xs={xsDown ? 12 : 6}
                        sx={{ mb: 2 }}
                      >
                        <BlogPost blog={blog} assets={assets} mini />
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12} sx={{ mt: 4 }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#2dd5c4",
                          textShadow: "0 0 5px #2dd5c4",
                          opacity: 0.8,
                        }}
                      >
                        There are no Blogs available
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              {!breakpointDown && (
                <Grid item sx={{ pl: 4, position: "sticky", top: 0 }}>
                  <DogeAd />
                </Grid>
              )}
            </Grid>
          </Container>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              position: "relative",
              backgroundColor: "#001220",
            }}
          >
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ height: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: 200,
                  color: "#2dd5c4",
                  textShadow: "0 0 20px #2dd5c4",
                }}
              >{`</>`}</Typography>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default BlogPage;
