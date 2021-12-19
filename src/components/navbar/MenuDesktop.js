import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Link as LinkScroll } from 'react-scroll';

const styles = {
    ContainerItems: {
        display: 'flex',
        ml: 2,
        textAlign: 'center',
    },
    items: {
        mr: 0.8,
        color: cyan[500],
    },
};

export const MenuDesktop = () => {
    return (
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <LinkScroll
                    activeClass='active'
                    to='aboutMe'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <Typography sx={styles.items} variant='caption'>
                        01.
                    </Typography>
                    <Typography variant='caption'>About</Typography>
                </LinkScroll>
            </Box>

            <Box sx={styles.ContainerItems}>
                <LinkScroll
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >
                    <Typography sx={styles.items} variant='caption'>
                        02.
                    </Typography>
                    <Typography variant='caption'>Projects</Typography>
                </LinkScroll>
            </Box>
            <Box sx={styles.ContainerItems}>
                <LinkScroll
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1100}
                >
                    <Typography sx={styles.items} variant='caption'>
                        03.
                    </Typography>
                    <Typography variant='caption'>Contact</Typography>
                </LinkScroll>
            </Box>

            <Box sx={styles.ContainerItems}>
                <Button variant='outlined' size='sm'>
                    Cv
                </Button>
            </Box>
        </Box>
    );
};
