import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { cyan } from '@mui/material/colors'
import { Link as LinkScroll } from 'react-scroll'

const styles = {
    ContainerPrimaryLinks: {
        display: 'flex',
        cursor: 'pointer',
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
            color: cyan[500],
        },
    },
    ContainerLinks: {
        display: 'flex',
        ml: 2,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
            color: cyan[500],
        },
    },
    typo: {
        mr: 0.8,
        color: cyan[500],
    },
}

export const MenuDesktop = () => {
    return (
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Box sx={styles.ContainerPrimaryLinks}>
                <LinkScroll
                    activeClass='active'
                    to='aboutMe'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Typography sx={styles.typo} variant='caption'>
                        01.
                    </Typography>
                    <Typography variant='caption'>About</Typography>
                </LinkScroll>
            </Box>

            <Box sx={styles.ContainerLinks}>
                <LinkScroll
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >
                    <Typography sx={styles.typo} variant='caption'>
                        02.
                    </Typography>
                    <Typography variant='caption'>Projects</Typography>
                </LinkScroll>
            </Box>
            <Box sx={styles.ContainerLinks}>
                <LinkScroll
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1100}
                >
                    <Typography sx={styles.typo} variant='caption'>
                        03.
                    </Typography>
                    <Typography variant='caption'>Contact</Typography>
                </LinkScroll>
            </Box>

            <Box sx={styles.ContainerLinks}>
                <Button
                    variant='outlined'
                    size='sm'
                    href='https://res.cloudinary.com/dzq3t5xj3/image/upload/v1669282728/FAANGPath_Simple_Template_1_pdwjo7.pdf'
                    target={'_blank'}
                >
                    Cv
                </Button>
            </Box>
        </Box>
    )
}
