import { CardContent, Typography, Card, Box, IconButton } from '@mui/material';
import React from 'react';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tech } from '../projects/Tech';
import { cyan } from '@mui/material/colors';
const styles = {
    cardContainer: {
        background: 'var(--blue-color-secondary)',
        borderRadius: '10px',
        border: '1px solid #1E4976',
        backdropFilter: 'blur( 4px )',
    },

    headerBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: cyan[500],
        py: 2,
    },
    textBox: {
        textAling: 'center',
        color: 'white',
        pt: 2,
    },
};

export const SecondaryProjects = () => {
    return (
        <Card sx={styles.cardContainer}>
            <CardContent>
                <Box sx={styles.headerBox}>
                    <Box>
                        <FolderRoundedIcon fontSize='large' />
                    </Box>
                    <IconButton
                        href='https://www.google.com'
                        target='_blank'
                        rel='noreferrer'
                        sx={{ ml: 'auto' }}
                    >
                        <LaunchIcon sx={{ color: 'white' }} />
                    </IconButton>

                    <IconButton href='https://www.google.com' target='_blank' rel='noreferrer'>
                        <GitHubIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
                <Box sx={styles.textBox}>
                    <Typography variant='h5'>time to have more fun</Typography>
                    <Typography variant='subtitle2' sx={{ color: '#8892b0', py: 2 }}>
                        A single page web app for helping me choose where to travel, built with
                        Next.js, Firebase, and Tailwind CSS
                    </Typography>
                </Box>
                <Tech tech={['vuejs', 'react', 'angular']} justify={'flex-start'} />
            </CardContent>
        </Card>
    );
};
