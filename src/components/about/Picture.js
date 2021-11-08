import React from 'react';
import { Box } from '@mui/material';

const styles = {
    imageContainer: {
        pt: 6,
        display: 'flex',
        justifyContent: 'center',
    },
    imageProfile: {
        borderRadius: '4px',
        height: '300',
        width: '300',
        maxHeight: { xs: 300, md: 300 },
        maxWidth: { xs: 300, md: 300 },
        filter: 'brightness(40%)',
        transition: 'filter 0.3s ease-in-out',
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
                src="https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg'"
            />
        </Box>
    );
};
