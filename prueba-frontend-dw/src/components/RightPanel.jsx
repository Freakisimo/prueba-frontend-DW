import React from "react";
import Box from "@mui/material/Box";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryIcon from "@mui/icons-material/History";
import SpeedIcon from "@mui/icons-material/Speed";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Fab from '@mui/material/Fab';

function RightPanel() {
  return (
    <div className="right-panel">
      <Box className="icon right" backgroundColor={pink[400]}>
        <IconButton size="large">
          <KeyboardArrowLeftIcon fontSize="small" /> <BarChartIcon />
        </IconButton>
      </Box>
      <div className="fab-btn">
      <Fab size="small" className="fab-btn">
        <LocationOnIcon fontSize="large" />
      </Fab>
      </div>
      <div className="fab-btn">
      <Fab size="small">
        <HistoryIcon fontSize="large" />
      </Fab>
      </div>
      <div className="fab-btn">
      <Fab size="small">
        <SpeedIcon fontSize="large" />
      </Fab>
      </div>
      <div className="fab-btn">
      <Fab size="small">
        <BarChartIcon fontSize="large" />
      </Fab>
      </div>
    </div>
  );
}

export default RightPanel;
