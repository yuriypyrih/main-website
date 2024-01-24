import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { format } from "date-fns";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { setSelectedBlog } from "redux/slices/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type BlogPostProps = {
  mini?: boolean;
  blog: any;
  assets: any[];
};

const BlogPost: React.FC<BlogPostProps> = ({ mini = false, blog, assets }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down("sm"));

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        // render the EMBEDDED_ASSET as you need
        if (assets) {
          const foundImage = assets.find(
            (a) => a.sys?.id === node.data?.target?.sys?.id
          );
          if (foundImage) {
            return (
              <img
                alt={"blogImage"}
                width={"100%"}
                style={{
                  borderRadius: "8px",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
                src={`https://${foundImage.fields.file.url}`}
              />
            );
          } else return;
        } else return;
      },
    },
  };

  const handleClickReadMore = () => {
    console.log(blog);
    const id = blog?.sys?.id;
    if (mini && id) {
      dispatch(setSelectedBlog(blog));
      navigate(`/Blogs/${id}`);
    }
  };

  const getImage = () => {
    let blogURL = "";
    if (assets) {
      const foundImage = assets.find(
        (a) => a.sys?.id === blog.fields?.postImage?.sys?.id
      );
      if (foundImage) blogURL = `https://${foundImage.fields.file.url}`;
    }

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingBottom: "56.25%",
        }}
      >
        <img
          src={blogURL || "/assets/defaultPost.png"}
          alt="blog post"
          onClick={handleClickReadMore}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            cursor: mini ? "pointer" : undefined,
          }}
        />
      </div>
    );
  };

  const getTags = () => {
    if (blog?.metadata?.tags) {
      return (
        <Grid container item>
          {blog.metadata.tags.map((t: any, index: number) => (
            <Grid item key={index} sx={{ pr: 1 }}>
              <Typography sx={{ fontSize: 14, color: "#2dd5c4" }}>
                #{t.sys?.id}
              </Typography>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <Box
      sx={{
        background: "#00122020",
        color: "#ffffffDD",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 10px #2dd5c450",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          {getImage()}
        </Grid>
        <Grid item sx={{ mt: 3, mx: xsDown ? 2 : 3 }}>
          <Typography
            sx={{ fontSize: mini || xsDown ? 24 : 32, fontWeight: "bold" }}
          >
            {blog.fields?.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          wrap={"nowrap"}
          sx={{ m: "16px 16px 12px 16px" }}
        >
          <Grid item>
            <img
              src={"/assets/me.jpg"}
              alt={"me"}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "99px",
                objectFit: "cover",
                objectPosition: "center",
                boxShadow: "1px 1px 5px #00000050",
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            justifyContent={"center"}
            sx={{ pl: 1 }}
          >
            <Grid item container alignItems={"center"}>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#2dd5c4",
                    textShadow: "0 0 4px #2dd5c4",
                  }}
                >
                  Yuriy Pyrih
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              {blog.fields.blogDate && (
                <Typography sx={{ fontSize: 14, color: "#ffffff80" }}>
                  {format(
                    new Date(blog.fields.blogDate.split("T")[0]),
                    "MMM d, yyyy"
                  )}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ px: xsDown ? 2 : 3, minHeight: "72px" }}>
          <Typography sx={{ fontSize: mini || xsDown ? 16 : 18 }}>
            {blog.fields.description}
          </Typography>
        </Grid>
        {mini ? (
          <Grid
            container
            item
            xs={12}
            justifyContent={"space-between"}
            alignItems={"flex-end"}
            sx={{ mx: 3, mb: 2, mt: 3 }}
          >
            <Grid item>{getTags()}</Grid>
            <Grid item sx={{ cursor: "pointer" }} onClick={handleClickReadMore}>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#2dd5c4",
                  textDecoration: "underline",
                  textShadow: "0 0 5px #2dd5c420",
                  "&:hover": {
                    textShadow: "0 0 10px #2dd5c4AA",
                  },
                }}
              >
                Read More
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid container item xs={12} justifyContent={"center"}>
              <Box
                sx={{
                  my: 4,
                  width: "80%",
                  height: "2px",
                  background: "#ffffff50",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mx: xsDown ? 2 : 3, mb: 1 }}
              className={"richContentClass"}
            >
              {documentToReactComponents(
                blog.fields.mainContent,
                renderOptions
              )}
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default BlogPost;
