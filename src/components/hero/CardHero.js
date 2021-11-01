import React from 'react';
import { Box } from '@mui/material';
const styles = {
    containerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'red',
        width: '300px',
        height: '300px',
    },
};
export const CardHero = () => {
    return (
        <Box sx={styles.containerBox}>
            <Box sx={styles.card}>pene</Box>
        </Box>
    );
};
