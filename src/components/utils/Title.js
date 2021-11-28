import React from 'react';
import { Typography, Box } from '@mui/material';
import { cyan } from '@mui/material/colors';

const styles = {
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        py: 2,
        mt: 20,
    },
};

export const Title = ({ number, title }) => {
    return (
        <Box sx={styles.titleContainer}>
            <Typography variant='subtitle1' sx={{ color: cyan[500], pr: 1 }}>
                {number}
            </Typography>

            <Typography sx={{ fontWeight: 'bold', color: 'common.white' }} variant='h5'>
                {title}
            </Typography>
        </Box>
    );
};
