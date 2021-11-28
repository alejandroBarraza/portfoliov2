import React from 'react';

import { Box, Card, CardContent, Typography, Container, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import LaunchIcon from '@mui/icons-material/Launch';
import { cyan } from '@mui/material/colors';
const styles = {
    cardContainer: {
        background: 'var(--blue-color-secondary)',
        borderRadius: '10px',
        border: '1px solid #1E4976',
        backdropFilter: 'blur( 4px )',
    },
    titleProject: {
        color: 'common.white',
        cursor: 'pointer',
        py: 2,
        transition: 'color .5s ease',
        '&:hover': {
            color: cyan[500],
        },
    },
};

export const CardProjectMobile = ({ titleProject, description, githubLink, externalLink }) => {
    return (
        <Container sx={{ my: 16 }}>
            <Box sx={{ minWidth: 275 }}>
                <Card sx={styles.cardContainer}>
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
                                sx={{ pl: 1 }}>
                                <LaunchIcon sx={{ color: cyan[500] }} />
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};
