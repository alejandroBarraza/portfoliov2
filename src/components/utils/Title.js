import React from 'react';
import { Typography, Box } from '@mui/material';
import { cyan } from '@mui/material/colors';

const styles = {
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        mt: 20,
    },
};

export const Title = ({ number, title, justify, padding }) => {
    justify
        ? (styles.titleContainer.justifyContent = justify)
        : (styles.titleContainer.justifyContent = 'flex-start');

    padding
        ? (styles.titleContainer.padding = padding)
        : (styles.titleContainer.padding = '2rem 0');
    return (
        <Box sx={styles.titleContainer}>
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
        ...styles.titleContainer,
        justifyContent: 'flex-start',
    },
};
