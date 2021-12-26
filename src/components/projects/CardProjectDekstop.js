import React from 'react';
import { Box, Typography, CardContent, Card, Link } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Tech } from './Tech';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const styles = {
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        mb: 10,
        alignItems: 'stretch',
    },
    picContainer: {
        display: 'flex',
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

export const CardProjectDekstop = ({
    url,
    titleProject,
    description,
    githubLink,
    externalLink,
}) => {
    return (
        <Box sx={styles.cardContainer}>
            <Box sx={styles.picContainer}>
                <Link href={url} target='_blank' rel='noreferrer'>
                    <Box sx={styles.imageProject} component='img' alt='profile-pic' src={url} />
                </Link>
            </Box>

            <Box sx={styles.textContainer}>
                <Typography sx={{ fontSize: 14, color: cyan[500] }} gutterBottom>
                    Featured Project
                </Typography>
                <Typography variant='h5' component='div' sx={styles.titleProject}>
                    {titleProject}
                </Typography>
                <Card sx={styles.descriptionContainer}>
                    <CardContent>
                        <Typography
                            variant='subtitle2'
                            sx={{ textAlign: 'right', color: '#8892b0' }}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
                <Tech tech={['vscode', 'react', 'Mui']} />
                <Box sx={styles.linkContainer}>
                    <Link href={githubLink} target='_blank' rel='noreferrer'>
                        <GitHubIcon sx={{ color: 'common.white' }} />
                    </Link>
                    <Link href={externalLink} target='_blank' rel='noreferrer' sx={{ pl: 1 }}>
                        <LaunchIcon sx={{ color: 'common.white' }} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
