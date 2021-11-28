import React from 'react';
import { Box, Typography, Container, CardContent, Card, Link } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Tech } from './Tech';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },

    imageProject: {
        borderRadius: '4px',
        maxWidth: '120%',
        minHeight: '100%',
        filter: 'brightness(60%)',
        transition: 'filter 0.3s linear',
        '&:hover': {
            filter: 'none',
        },
    },
    titleProject: {
        color: 'common.white',
        fontWeight: 'bold',
        pt: 1,
        pb: 2,
    },
    descriptionContainer: {
        background: 'var(--blue-color-secondary)',
        borderRadius: '10px',
        backdropFilter: 'blur( 4px )',
        zIndex: 2,
    },
    linkContainer: {
        display: 'flex',
    },
};

export const CardProjectDekstop = ({ url, tittle, description, techStack, links }) => {
    return (
        <Container maxWidth='md'>
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
                        src='https://www.analyticssteps.com/backend/media/thumbnail/854054/9976175_1625576836_Top-10%20data%20science%20projects%20for%20beginnersArtboard%201.jpg'
                    />
                </Box>

                <Box sx={styles.textContainer}>
                    <Typography sx={{ fontSize: 14, color: cyan[500] }} gutterBottom>
                        Featured Project
                    </Typography>
                    <Typography variant='h5' component='div' sx={styles.titleProject}>
                        Timer Vanilla Js
                    </Typography>
                    <Card sx={styles.descriptionContainer}>
                        <CardContent>
                            <Typography
                                variant='subtitle2'
                                sx={{ textAlign: 'right', color: '#8892b0' }}>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
                                and more. Available on Visual Studio Marketplace, Package Control,
                                Atom Package Manager, and npm.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Tech tech={['vscode', 'react', 'Mui']} />
                    <Box sx={styles.linkContainer}>
                        <Link>
                            <GitHubIcon sx={{ color: 'common.white' }} />
                        </Link>
                        <Link sx={{ pl: 1 }}>
                            <LaunchIcon sx={{ color: 'common.white' }} />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
