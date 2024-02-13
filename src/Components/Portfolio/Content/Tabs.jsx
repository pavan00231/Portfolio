import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabsData from './TabsData';
import { ProjectData } from '../../../utils/DataObj';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} >
                    <Typography className='grid_tabs_customTab'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
            <Box sx={{ borderBottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Personal Project" {...a11yProps(1)} />
                    <Tab label="Professional Work" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} style={{ marginTop: '20px' }}>
                {
                    ProjectData?.length > 0 && ProjectData?.map((i) => (   <TabsData data={i} />))
                }
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} style={{ marginTop: '20px' }}>
            {
                    ProjectData?.length > 0 && ProjectData?.map((i) => (   i?.type == 'personal' && <TabsData data={i} />))
                }
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} style={{ marginTop: '20px' }}>
            {
                    ProjectData?.length > 0 && ProjectData?.map((i) => (   i?.type == 'professional' && <TabsData data={i} />))
                }
            </CustomTabPanel>
        </Box>
    );
}
