import React, {useState} from 'react';
import { Box, Tabs, Tab } from '@mui/material';

function TabsPandel({ tabsData, value, onTabChange }) {
    const [values, setValues] = useState(0);

    const handleChange = (event, value) => {
        setValues(value);
    };

    return tabsData ? (
        <Box>
            <Tabs value={values} onChange={handleChange}>
                {tabsData.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </Tabs>  
        </Box>
    ) : (
        <></>
    );
}

export default TabsPandel;