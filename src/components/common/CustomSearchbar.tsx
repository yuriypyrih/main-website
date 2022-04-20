import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

type CustomSearchbarProps = {
  search: string;
  setSearch: (s: string) => void;
  shrinkable?: boolean;
};

const CustomSearchbar: React.FC<CustomSearchbarProps> = ({
  search,
  setSearch,
  shrinkable = false,
}) => {
  const [expanded, setExpanded] = useState<boolean>(!shrinkable);

  const handleToggleExpand = () => {
    if (shrinkable) {
      setExpanded(!expanded);
    }
  };

  const handleClear = () => {
    setSearch("");
  };
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #2dd5c490",
        transition: "all 0.4s ease-out",
        boxShadow: search ? "0 0 5px #2dd5c4" : undefined,
        borderRadius: "99px",
        p: 1,
        height: "32px",
      }}
    >
      <Grid container wrap={"nowrap"} alignItems={"center"}>
        {expanded && (
          <>
            <Grid item sx={{ width: 260, position: "relative" }}>
              <InputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ ml: 1, pr: 1, width: "100%", color: "#2dd5c4" }}
                placeholder="Search by Title"
                inputProps={{ "aria-label": "search by title" }}
              />
            </Grid>
          </>
        )}
        <Grid item>
          {search ? (
            <IconButton sx={{ p: 0 }} onClick={handleClear}>
              <ClearIcon sx={{ width: 32, height: 32, color: "#2dd5c4" }} />
            </IconButton>
          ) : (
            <IconButton sx={{ p: 0 }} onClick={handleToggleExpand}>
              <SearchIcon sx={{ width: 32, height: 32, color: "#2dd5c4" }} />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomSearchbar;
