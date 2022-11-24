import React from 'react'
import { CardContent, Typography, Card, Box, IconButton } from '@mui/material'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { cyan } from '@mui/material/colors'
import { Tech } from '../projects/Tech'

const styles = {
    cardContainer: {
        background: 'var(--blue-color-secondary)',
        borderRadius: '10px',
        border: '1px solid #1E4976',
        backdropFilter: 'blur( 4px )',
        transition: 'transform 0.2s linear, box-shadow 0.2s linear',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
            boxShadow: '1px 1px 6px 1px #055E70',
        },
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
}

export const SecondaryProjects = ({ title, description, tech, githubLink, externalLink }) => {
    return (
        <Card sx={styles.cardContainer}>
            <CardContent>
                <Box sx={styles.headerBox}>
                    <Box>
                        <FolderRoundedIcon fontSize='large' />
                    </Box>
                    {externalLink && (
                        <IconButton
                            href={externalLink}
                            target='_blank'
                            rel='noreferrer'
                            sx={{ ml: 'auto' }}
                        >
                            <LaunchIcon sx={{ color: 'white' }} />
                        </IconButton>
                    )}

                    <IconButton href={githubLink} target='_blank' rel='noreferrer'>
                        <GitHubIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
                <Box sx={styles.textBox}>
                    <Typography variant='h5'>{title}</Typography>
                    <Typography variant='subtitle2' sx={{ color: '#8892b0', py: 2 }}>
                        {description}
                    </Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                    <Tech tech={tech} justify={'flex-start'} />
                </Box>
            </CardContent>
        </Card>
    )
}
