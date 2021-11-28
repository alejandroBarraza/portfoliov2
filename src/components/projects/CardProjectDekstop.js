import React from 'react';
import { Box, Typography } from '@mui/material';
import { cyan, grey } from '@mui/material/colors';

const styles = {
    containerDescription: {
        display: 'flex',
        alignItems: 'center',
        py: 2,
        mt: 20,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    picContainer: {
        width: '50%',
    },
    textContainer: {
        width: '50%',
    },

    imageProject: {
        borderRadius: '4px',
        maxWidth: '100%',
        filter: 'brightness(40%)',
        transition: 'filter 0.3s linear',
        '&:hover': {
            filter: 'none',
        },
    },
};
export const CardProjectDekstop = () => {
    return (
        <>
            <Box sx={styles.containerDescription}>
                <Typography variant='subtitle1' sx={{ color: cyan[500], pr: 1 }}>
                    01.
                </Typography>

                <Typography sx={{ fontWeight: 'bold', color: 'common.white' }} variant='h5'>
                    Some Things I’ve Built
                </Typography>
            </Box>
            <Box sx={styles.cardContainer}>
                <Box sx={styles.picContainer}>
                    <Box
                        sx={styles.imageProject}
                        component='img'
                        alt='profile-pic'
                        src='https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg'
                    />
                </Box>

                <Box sx={styles.textContainer}>
                    <Typography sx={{ fontSize: 14, color: cyan[500] }} gutterBottom>
                        Projects 1
                    </Typography>
                    <Typography variant='h5' component='div' sx={styles.titleProject}>
                        Timer Vanilla Js
                    </Typography>
                    <Box>
                        <Typography variant='body1' color='common.white'>
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
                            more. Available on Visual Studio Marketplace, Package Control, Atom
                            Package Manager, and npm.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
