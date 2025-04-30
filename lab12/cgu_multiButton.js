import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SpeakerIcon from '@mui/icons-material/Speaker';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const iconStyle = { color: 'blue' };

const icons = [
  <DeleteIcon sx={iconStyle} />,
  <SpeakerIcon sx={iconStyle} />,
  <AccessAlarmIcon sx={iconStyle} />
];

const MultiButton = ({ num = 3 }) => {
  return (
    <div>
      {Array.from({ length: num }, (_, i) => (
        <IconButton key={i}>
          {icons[i % icons.length]}
        </IconButton>
      ))}
    </div>
  );
};

export default MultiButton;
