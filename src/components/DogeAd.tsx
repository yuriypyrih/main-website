import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ReactComponent as DogeAdSvg } from "../assets/svg/doge-ad2.svg";

const DogeAd: React.FC = () => {
  const getDisclaimer = () => {
    return (
      <Typography
        sx={{
          fontSize: 16,
          color: "#2dd5c4",
          px: 1,
          textShadow: "0 0 1px #2dd5c4",
        }}
      >{`Disclaimer: The Dodge Project has nothing to do with the Doge Meme.`}</Typography>
    );
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "260px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 5px #2dd5c4",
        height: "599px",
        "& svg": { width: "260px", height: "600px" },
        "& *": { fontFamily: "Nexa" },
      }}
    >
      <Box
        sx={{
          background: "#00122020",
        }}
      >
        <DogeAdSvg />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <Grid container wrap={"nowrap"}>
          <Box className={"disclaimerTrain"}> {getDisclaimer()}</Box>
          <Box className={"disclaimerTrainFandom"}> {getDisclaimer()}</Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default DogeAd;
