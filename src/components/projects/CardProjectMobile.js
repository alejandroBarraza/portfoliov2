import React from 'react';

import { Box, Card, CardContent, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { cyan } from '@mui/material/colors';

import LaunchIcon from '@mui/icons-material/Launch';

const styles = {
    cardContainer: {
        backgroundImage: "url('/project1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        border: '1px solid #1E4976',
        backdropFilter: 'blur( 4px )',
        transition: 'transform 0.2s linear',

        '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
        },
    },
    cardOverContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '2',
    },
    titleProject: {
        color: 'common.white',
        cursor: 'pointer',
        py: 2,
        transition: 'color .5s ease',
        '&:hover': {
            color: cyan[500],
        },
        zIndex: '5',
    },
};

export const CardProjectMobile = ({ titleProject, description, githubLink, externalLink }) => {
    return (
        <Box sx={{ minWidth: 275, mb: 4 }}>
            <Card sx={styles.cardContainer}>
                <Box sx={styles.cardOverContainer}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, color: cyan[500] }} gutterBottom>
                            Featured Project
                        </Typography>
                        <Typography variant='h5' component='div' sx={styles.titleProject}>
                            {titleProject}
                        </Typography>

                        <Typography variant='body2' sx={{ pb: 2, color: '#8892b0' }}>
                            {description}
                        </Typography>
                        <Box sx={{ py: 1 }}>
                            <Link href={githubLink} target='_blank' rel='noreferrer'>
                                <GitHub sx={{ color: cyan[500] }} />
                            </Link>
                            <Link
                                href={externalLink}
                                target='_blank'
                                rel='noreferrer'
                                sx={{ pl: 1 }}
                            >
                                <LaunchIcon sx={{ color: cyan[500] }} />
                            </Link>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};
