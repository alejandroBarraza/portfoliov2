import React from 'react';
import { Box } from '@mui/material';

const styles = {
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        pl: { xs: 0, md: 4 },
    },
    imageProfile: {
        borderRadius: '4px',
        height: '300',
        width: '100%',
        maxHeight: { xs: 300, md: 300 },
        filter: 'brightness(40%)',
        transition: 'filter 0.5s linear',
        '&:hover': {
            filter: 'none',
        },
    },
};
export const Picture = () => {
    return (
        <Box sx={styles.imageContainer}>
            <Box
                component='img'
                sx={styles.imageProfile}
                alt='profile-pic'
                src='https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg'
            />
        </Box>
    );
};
