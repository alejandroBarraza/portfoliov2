import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { cyan } from '@mui/material/colors';

const styles = {
    ContainerItems: {
        display: 'flex',
        ml: 2,
        textAlign: 'center',
    },
    items: {
        mr: 0.8,
        color: cyan[500],
    },
};

export const MenuDesktop = () => {
    return (
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <Typography sx={styles.items} variant='caption'>
                    01.
                </Typography>
                <Typography variant='caption'>About</Typography>
            </Box>
            <Box sx={styles.ContainerItems}>
                <Typography sx={styles.items} variant='caption'>
                    02.
                </Typography>
                <Typography variant='caption'>Experience</Typography>
            </Box>
            <Box sx={styles.ContainerItems}>
                <Typography sx={styles.items} variant='caption'>
                    03.
                </Typography>
                <Typography variant='caption'>Projects</Typography>
            </Box>
            <Box sx={styles.ContainerItems}>
                <Button variant='outlined' size='sm'>
                    Cv
                </Button>
            </Box>
        </Box>
    );
};
