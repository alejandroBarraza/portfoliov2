import React from 'react';
import { Box } from '@mui/material';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    imageProfile: {
        borderRadius: '4px',
        height: '300',
        width: '100%',
        maxHeight: { xs: 300, md: 200 },
    },
    circleContainer: {
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'center',
        height: '200px',
        width: '200px',
        backgroundColor: 'rgba(255, 255, 255, .15)',
        borderRadius: '50%',
        boxShadow: '0px 0px 20px rgba(17,214,214,0.75)',
        transition: 'box-shadow 0.5s linear',
        '&:hover': {
            boxShadow: '0px 0px 40px rgba(255,0,155,0.75)',
        },
    },
};
export const Picture = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.circleContainer}>
                <Box
                    component='img'
                    sx={styles.imageProfile}
                    alt='profile-pic'
                    src='/profile2.png'
                />
            </Box>
        </Box>
    );
};
