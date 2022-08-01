import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { pink } from '@mui/material/colors';
import IconButton from "@mui/material/IconButton";


function LeftPanel() {
  return (
    <div className="left-panel">
      <Box className="icon left" backgroundColor={pink[400]}>
      <IconButton size="large">
        <DriveFileRenameOutlineIcon /> <KeyboardArrowRightIcon fontSize="small" />
      </IconButton>
      </Box>
    </div>
  );
}

export default LeftPanel;
