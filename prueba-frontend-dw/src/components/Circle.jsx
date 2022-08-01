import React from "react";
import Box from '@mui/material/Box';

function Circle(props) {
    return (
        <Box className="circle">
            {props.icon}
        </Box>
    );
}

export default Circle;