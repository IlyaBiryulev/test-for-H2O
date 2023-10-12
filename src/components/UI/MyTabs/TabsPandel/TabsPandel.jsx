import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

function TabsPandel({ tabsData, value, onChange }) {
    return tabsData ? (
        <Box 
            sx={{
                width: 754,
                color: 'success.main',
            }}>
            <Tabs value={value} onChange={onChange} sx={{
                minHeight: '16px',
                borderBottom: '1px solid rgba(210, 209, 209, 1)'
            }} TabIndicatorProps={{style: {background:'#54D3C2'}}} textColor="inherit">
                {tabsData.map((tab, index) => (
                    <Tab key={index} label={tab.label}  
                        sx={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            fontWeight: 700,
                            color: '#323F47',
                            padding: '14px 0',
                            margin: '0 6px',
                            textTransform: 'none',
                        }}
                    />
                ))};
            </Tabs>  
        </Box>
    ) : (
        <></>
    );
}

export default TabsPandel;