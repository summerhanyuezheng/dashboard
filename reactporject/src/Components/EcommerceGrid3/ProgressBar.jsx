import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey', // Set the rest of the bar to lightgrey
    '& .MuiLinearProgress-bar': { // General selector for the filled bar part
      borderRadius: 5,
      backgroundColor: 'rgb(3, 195, 236)', // Set the completed part to your custom color
    },
  });
  

export default function ProgressBar({ value }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${value}%`}</Typography>
      </Box>
    </Box>
  );
}
