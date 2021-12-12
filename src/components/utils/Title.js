import React from 'react';
import { Typography, Box } from '@mui/material';
import { cyan } from '@mui/material/colors';

const styles = {
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        mt: 20,
        mb: 2,
        justifyContent: 'flex-start',
    },
};

export const Title = ({ number, title, custom }) => {
    return (
        <Box sx={{ ...styles.titleContainer, ...custom }}>
            {number && (
                <Typography variant='subtitle1' sx={{ color: cyan[500], pr: 1 }}>
                    {number}
                </Typography>
            )}

            <Typography sx={{ fontWeight: 'bold', color: 'common.white' }} variant='h5'>
                {title}
            </Typography>
        </Box>
    );
};

Title.defaultProps = {
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        mt: 20,
        mb: 2,
        justifyContent: 'flex-start',
    },
};
