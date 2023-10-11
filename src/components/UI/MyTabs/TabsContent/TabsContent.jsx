import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';

const TabsContent = ({ tabsComponents, value }) => {
  return (
    <div>
      {tabsComponents.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          hidden={value !== index}
        >
          {value === index && (
            <Box>
              
            </Box>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsContent;
